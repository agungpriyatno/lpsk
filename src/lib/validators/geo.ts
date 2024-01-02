import { z } from "zod"

type AllowedGeometry = GeoJSON.Feature<
    GeoJSON.Point | GeoJSON.LineString | GeoJSON.Polygon
>

export const geoSchema = z.object({
    features: z.array(z.object({
        type: z.literal('Feature'),
        properties: z.object({}),
        geometry: z.object({
            coordinates: z.any().array(),
            type: z.literal('Point'),
        }),
    }) satisfies z.ZodType<AllowedGeometry>)
}) 