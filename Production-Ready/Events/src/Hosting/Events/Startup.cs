using Events.Api.DI.Setup;
using Events.Repository.Contexts;
using Events.Seeder;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Swashbuckle.AspNetCore.Swagger;

namespace Events
{
    public class Startup
    {
        public IConfigurationRoot Configuration { get; set; }

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();

            Configuration = builder.Build();
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();

            services.AddMvc();

            services.AddAllDependencies();

            services.AddSingleton<IConfiguration>(Configuration);

            services.AddSwaggerGen(c =>
                c.SwaggerDoc("v1", new Info {Title = "Requests API", Version = "v1"}));

            var connectionString = Configuration["EventsDB:ConnectionString"];

            services.AddDbContext<EventsDbContext>(options =>
                options.UseNpgsql(connectionString));
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory,
            IServiceScopeFactory scopeFactory)
        {
            loggerFactory.AddConsole();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            scopeFactory.SeedData();

            app.UseCors(builder => builder
                .AllowAnyOrigin()
                .AllowAnyHeader()
                .AllowAnyMethod()
                .AllowCredentials());

            app.UseMvc();

            app.UseSwagger();

            var virtualDirectory = Configuration["Hosting:VirtualDirectory"];

            var swaggerUrl = (!string.IsNullOrWhiteSpace(virtualDirectory) ? $"/{virtualDirectory}" : string.Empty) +
                             "/swagger/v1/swagger.json";

            app.UseSwaggerUI(c =>
            {
                c.DocExpansion("none");
                c.SwaggerEndpoint(swaggerUrl, "My Api V1");
            });
        }
    }
}
