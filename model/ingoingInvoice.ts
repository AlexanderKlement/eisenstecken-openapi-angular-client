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
import { Payment } from './payment';
import { OrderedArticle } from './orderedArticle';
import { Lock } from './lock';


export interface IngoingInvoice { 
    lock: Lock;
    number: string;
    name: string;
    date: string;
    total: number;
    iva: string;
    cf: string;
    id: number;
    timestamp: string;
    payment?: Payment;
    articles: Array<OrderedArticle>;
}

