using Events.Api.Cases.Users;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace Events.Api.DI.Setup.Application.Users
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddApplicationLayerUserDependencies(this IServiceCollection services)
        {
            if (services == null)
            {
                throw new ArgumentNullException(nameof(services));
            }

            return services
                .AddScoped<IUserCases, UserCases>();
        }
    }
}