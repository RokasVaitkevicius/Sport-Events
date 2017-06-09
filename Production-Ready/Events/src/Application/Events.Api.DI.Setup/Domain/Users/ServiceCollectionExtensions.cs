using Events.Domain.Factories.User;
using Events.Domain.Factories.Users;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace Events.Api.DI.Setup.Domain.Users
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddDomainLayerUserDependencies(this IServiceCollection services)
        {
            if (services == null)
            {
                throw new ArgumentNullException(nameof(services));
            }

            return services
                .AddScoped<IUserFactory, UserFactory>();
        }
    }
}