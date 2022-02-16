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
import { Vat } from './vat';
import { Unit } from './unit';


export interface DescriptiveArticle { 
    name: string;
    amount: number;
    description: string;
    single_price: number;
    discount: number;
    alternative: boolean;
    id: number;
    descriptive_article?: Array<DescriptiveArticle>;
    vat: Vat;
    unit: Unit;
    price_with_vat?: number;
    price_without_vat?: number;
    vat_amount?: number;
    header?: boolean;
}

