/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { DescriptiveArticle } from './descriptiveArticle';
import { Lock } from './lock';


export interface Offer { 
    lock: Lock;
    date: string;
    in_price_included: string;
    in_price_excluded: string;
    payment: string;
    delivery: string;
    id: number;
    timestamp: string;
    descriptive_articles: Array<DescriptiveArticle>;
    pdf?: string;
}

