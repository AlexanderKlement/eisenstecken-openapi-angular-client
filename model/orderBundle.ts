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
import { UserEssential } from './userEssential';
import { Orderable } from './orderable';
import { Lock } from './lock';


export interface OrderBundle { 
    lock: Lock;
    description: string;
    id: number;
    order_from: Orderable;
    create_date: string;
    delivery_date: string;
    pdf_internal?: string;
    pdf_external?: string;
    user: UserEssential;
    create_date_formatted: string;
    delivery_date_formatted: string;
    request: boolean;
}

