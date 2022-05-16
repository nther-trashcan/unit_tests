import { shallowMount,mount } from '@vue/test-utils';
import AddEditTemplate from '../../../modules/calendar-template/components/AddEditTemplate';
import 'whatwg-fetch'


describe('Component', () => {
    let wrapper;

    const VueToastStub = {
        render: () => {},
        methods: {
            resetValidation: () => {},
            validate:()=>{}
        }
      }
    
    beforeEach(() => {
        wrapper = shallowMount(AddEditTemplate,{
            propsData: {
                templateId: 0,
                removeEfectiveThrough: "" ,
                templateUrl: "" ,
                showHeader: true ,
                scheduleEdit: false ,
                readOnly: {
                    name: false,
                    description: false,
                },
                dataCypress: "" ,
                multiLocation: true ,
                names: "" ,
                resourceCheck: false ,
                dateMandatory: false,
                locationMandatory: true ,
                errorMessage: "" ,
                showLocation:  [] ,
                copyResourceSchedule: false ,
                copyTemplate: false ,
              },
              stubs:{
                  VForm:VueToastStub
              }
        });
    });
    
    afterEach(() => {
        wrapper.destroy();
    });
    
    it('is a Vue instance', () => {   
        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.isVueInstance).toBeTruthy();
    });

    it('is mocking data properly',()=>{
        expect(wrapper.vm.templateId).toEqual(0)   
        expect(wrapper.vm.removeEfectiveThrough).toEqual("")   
        expect(wrapper.vm.templateUrl).toEqual("")   
        expect(wrapper.vm.showHeader).toEqual(true)   
        expect(wrapper.vm.scheduleEdit).toEqual(false)
        expect(wrapper.vm.readOnly.name).toEqual(false)
        expect(wrapper.vm.readOnly.description).toEqual(false)
        expect(wrapper.vm.dataCypress).toEqual("")   
        expect(wrapper.vm.multiLocation).toEqual(true)   
        expect(wrapper.vm.names).toEqual("")   
        expect(wrapper.vm.resourceCheck).toEqual(false)   
        expect(wrapper.vm.dateMandatory).toEqual(false)   
        expect(wrapper.vm.locationMandatory).toEqual(true)   
        expect(wrapper.vm.errorMessage).toEqual("")   
        expect(wrapper.vm.showLocation).toEqual([])   
        expect(wrapper.vm.copyResourceSchedule).toEqual(false)   
        expect(wrapper.vm.copyTemplate).toEqual(false)   
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.templateId).toEqual('number')   
        expect(typeof wrapper.vm.removeEfectiveThrough).toEqual('string')   
        expect(typeof wrapper.vm.templateUrl).toEqual('string')   
        expect(typeof wrapper.vm.showHeader).toEqual('boolean')   
        expect(typeof wrapper.vm.scheduleEdit).toEqual('boolean')
        expect(typeof wrapper.vm.readOnly.name).toEqual('boolean')
        expect(typeof wrapper.vm.readOnly.description).toEqual('boolean')
        expect(typeof wrapper.vm.dataCypress).toEqual('string')   
        expect(typeof wrapper.vm.multiLocation).toEqual('boolean')   
        expect(typeof wrapper.vm.names).toEqual('string')   
        expect(typeof wrapper.vm.resourceCheck).toEqual('boolean')   
        expect(typeof wrapper.vm.dateMandatory).toEqual('boolean')   
        expect(typeof wrapper.vm.locationMandatory).toEqual('boolean')   
        expect(typeof wrapper.vm.errorMessage).toEqual('string')   
        expect(typeof wrapper.vm.showLocation).toEqual('object')   
        expect(typeof wrapper.vm.copyResourceSchedule).toEqual('boolean')   
        expect(typeof wrapper.vm.copyTemplate).toEqual('boolean')   
    })

    it('is mocking function properly',()=>{
        wrapper.vm.emitErrorMessage("This is template error message.")
        expect(wrapper.emitted()["template-error-msg"][0][0]).toEqual("This is template error message.")
        const form={
                name:"templateName",
                description:"This is a template description",
                effective_from:"2022/05/12",
                effective_to:"2099/12/31",
                default_time_zone_id: null,
                first_day_of_week:"MO",
                enabled: true,
                show_week_numbers: true,
                activities: [],
                removed: [],
                dates: [],
        }
        
        wrapper.vm.setForm(form)
        expect(wrapper.vm.form.name).toEqual("templateName")
        expect(wrapper.vm.form.description).toEqual("This is a template description")
        expect(wrapper.vm.form.effective_from).toEqual("2022/05/12")
        expect(wrapper.vm.form.effective_to).toEqual("2099/12/31")
        expect(wrapper.vm.form.first_day_of_week).toEqual("MO")
        wrapper.setData({
            form:{
                activities:[{from:"2022/05/31 12:00 PM",to:"2099/12/31 06:00 PM",reccurence_pattern:true,fromExternalFrom:{},frequency:"DAILY"}],
                effective_from:"2022/05/31",
                effective_to:"2099/12/31"
            }
        })
        const event={
            args:{
                appointment:{id:"0",name:"appointment1",jqxAppointment:{id:"000"}}
            }
        }
        wrapper.vm.appointmentDeleted(event,{})
        wrapper.vm.fetchActivityTypes()
        wrapper.vm.fetchAppointmentTypes()
        const locs=[{id:"0",name:"appointmentLocation1"},{id:"1",name:"appointmentLocation2"}]
        wrapper.vm.setLocations(locs)
        expect(wrapper.emitted()["locations"][0][0][0].id).toEqual("0")
        expect(wrapper.emitted()["locations"][0][0][0].name).toEqual("appointmentLocation1")
        wrapper.vm.changeRecurrencePattern()
        wrapper.vm.setCustomData({id:"0",name:"customData1"})
        expect(wrapper.vm.customData.id).toEqual("0")
        expect(wrapper.vm.customData.name).toEqual("customData1")
        wrapper.setData({
            firstLoad:true,
            isEdit:false
        })
        expect(wrapper.vm.setFirstDayOfWeek()).toEqual("MO")
    
    



    })
});