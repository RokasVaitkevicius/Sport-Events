using Events.Repository.User;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace Events.Api.DI.Setup.Infrastructure.User
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddUserLayerUserDependencies(this IServiceCollection services)
        {
            if (services == null)
            {
                throw new ArgumentNullException(nameof(services));
            }

            return services
                .AddScoped<IUserRepository, UserRepository>();
        }
    }
}