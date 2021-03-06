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
import { OrderBundle } from './orderBundle';
import { Orderable } from './orderable';
import { OrderStatusType } from './orderStatusType';
import { OrderedArticle } from './orderedArticle';
import { Lock } from './lock';


export interface Order { 
    lock: Lock;
    description: string;
    id: number;
    order_from: Orderable;
    order_to: Orderable;
    create_date: string;
    delivery_date?: string;
    pdf?: string;
    articles: Array<OrderedArticle>;
    status: OrderStatusType;
    status_translation: string;
    order_bundle?: OrderBundle;
    user: UserEssential;
    create_date_formatted: string;
}

