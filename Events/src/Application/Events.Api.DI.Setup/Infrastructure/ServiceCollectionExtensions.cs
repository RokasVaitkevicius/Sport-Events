﻿using Events.Api.DI.Setup.Infrastructure.Event;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace Events.Api.DI.Setup.Infrastructure
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddInfrastructureLayerDependencies(this IServiceCollection services)
        {
            if (services == null)
            {
                throw new ArgumentNullException(nameof(services));
            }

            return services
                .AddInfrastructureLayerEventDependencies();
        }
    }
}