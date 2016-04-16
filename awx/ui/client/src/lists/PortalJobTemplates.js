/*************************************************
 * Copyright (c) 2015 Ansible, Inc.
 *
 * All Rights Reserved
 *************************************************/
 

export default
    angular.module('PortalJobTemplatesListDefinition', [])
    .value('PortalJobTemplateList', {

        name: 'job_templates',
        iterator: 'job_template',
        editTitle: 'Job Templates',
        listTitle: 'Job Templates',
        index: false,
        hover: true,
        well: true,
        searchSize: 'col-lg-8 col-md-8 col-sm-12 col-xs-12',
        
        fields: {
            name: {
                key: true,
                label: 'Name',
                columnClass: 'col-lg-5 col-md-5 col-sm-9 col-xs-8',
                linkTo: '/#/job_templates/{{job_template.id}}'
            },
            description: {
                label: 'Description',
                columnClass: 'col-lg-4 col-md-4 hidden-sm hidden-xs'
            }
        },

        actions: {
        },

        fieldActions: {
            submit: {
                label: 'Launch',
                mode: 'all',
                ngClick: 'submitJob(job_template.id)',
                awToolTip: 'Start a job using this template',
                dataPlacement: 'top'
            }
        }
    });
