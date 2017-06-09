using Events.Api.DI.Setup.Domain.Event;
using Events.Api.DI.Setup.Domain.Users;
using Events.Api.DI.Setup.Domain.Voter;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace Events.Api.DI.Setup.Domain
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddDomainLayerDependencies(this IServiceCollection services)
        {
            if (services == null)
            {
                throw new ArgumentNullException(nameof(services));
            }

            return services
                .AddDomainLayerEventDependencies()
                .AddDomainLayerUserDependencies()
                .AddDomainLayerVoterDependencies();
        }
    }
}