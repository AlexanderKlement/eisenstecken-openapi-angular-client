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
import { WorkPhaseCreate } from './workPhaseCreate';
import { AdditionalWorkloadCreate } from './additionalWorkloadCreate';
import { ExpenseCreate } from './expenseCreate';
import { DriveCreate } from './driveCreate';
import { JobSectionCreate } from './jobSectionCreate';


export interface WorkDayUpdate { 
    job_sections: Array<JobSectionCreate>;
    expenses: Array<ExpenseCreate>;
    drives: Array<DriveCreate>;
    work_phases: Array<WorkPhaseCreate>;
    date: string;
    eating_place_id: number;
    additional_workloads: Array<AdditionalWorkloadCreate>;
}

