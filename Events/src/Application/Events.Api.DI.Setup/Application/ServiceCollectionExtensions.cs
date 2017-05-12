using AutoMapper;
using Events.Api.DI.Setup.Application.Event;
using Microsoft.Extensions.DependencyInjection;
using System;
using Events.Api.DI.Setup.Application.SportType;

namespace Events.Api.DI.Setup.Application
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddApplicationLayerDependencies(this IServiceCollection services)
        {
            if (services == null)
            {
                throw new ArgumentNullException(nameof(services));
            }

            return services
                .AddApplicationLayerEventDependencies()
                .AddApplicationLayerSportTypeDependencies()
                .AddAutoMapper();
        }
    }
}