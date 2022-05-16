import { shallowMount,mount } from '@vue/test-utils';
import NewTemplate from '../../../modules/calendar-template/components/NewTemplate';


describe('Component', () => {
    let wrapper;
    const VueStubForm={
        render:()=>{},
        methods:{
            reset:()=>{},
            validate:()=>{},
            resetValidation:()=>{}
        }
    }
    
    beforeEach(() => {
        wrapper = shallowMount(NewTemplate,{
            propsData: {
                readOnly: {
                    name: false,
                    description: false,  
                },
                removeEfectiveThrough: "" ,
                showHeader: true ,
                dateMandatory: false ,
                locationMandatory: true ,
                templateId: "" ,
                templateUrl: "" ,
                templateForm: {
                    name: "",
                    description: "",
                    effective_from: "",
                    effective_to: "",
                    default_time_zone_id: null,
                    first_day_of_week: "",
                    enabled: true,
                    show_week_numbers: false,
                    activities: [],
                    removed: [],
                    dates: [],
                },
                activityTypes: [] ,
                showLocation: [] ,
                appointmentTypes: [] ,
                dataCypress: "" ,
                multiLocation: true ,
                names: "" ,
                resource: false ,
                erMessage: "" ,
                copyResourceSchedule: false ,
                scheduleEdit: false ,
                copyTemplate: false ,
              },
            stubs:{
                VForm:VueStubForm
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
        expect(wrapper.vm.readOnly.name).toEqual(false)
        expect(wrapper.vm.readOnly.description).toEqual(false)
        expect(wrapper.vm.removeEfectiveThrough).toEqual("")   
        expect(wrapper.vm.showHeader).toEqual(true)   
        expect(wrapper.vm.dateMandatory).toEqual(false)   
        expect(wrapper.vm.locationMandatory).toEqual(true)   
        expect(wrapper.vm.templateId).toEqual("")   
        expect(wrapper.vm.templateUrl).toEqual("") 
        expect(wrapper.vm.templateForm.name).toEqual("")
        expect(wrapper.vm.templateForm.description).toEqual("")
        expect(wrapper.vm.templateForm.effective_from).toEqual("")
        expect(wrapper.vm.templateForm.effective_to).toEqual("")
        expect(wrapper.vm.templateForm.default_time_zone_id).toEqual(null)
        expect(wrapper.vm.templateForm.first_day_of_week).toEqual("")
        expect(wrapper.vm.templateForm.enabled).toEqual(true)
        expect(wrapper.vm.templateForm.show_week_numbers).toEqual(false)  
        expect(wrapper.vm.templateForm.activities).toEqual([])
        expect(wrapper.vm.templateForm.removed).toEqual([])
        expect(wrapper.vm.templateForm.dates).toEqual([])
        expect(wrapper.vm.activityTypes).toEqual([])   
        expect(wrapper.vm.showLocation).toEqual([])   
        expect(wrapper.vm.appointmentTypes).toEqual([])   
        expect(wrapper.vm.dataCypress).toEqual("")   
        expect(wrapper.vm.multiLocation).toEqual(true)   
        expect(wrapper.vm.names).toEqual("")   
        expect(wrapper.vm.resource).toEqual(false)   
        expect(wrapper.vm.erMessage).toEqual("")   
        expect(wrapper.vm.copyResourceSchedule).toEqual(false)   
        expect(wrapper.vm.scheduleEdit).toEqual(false)   
        expect(wrapper.vm.copyTemplate).toEqual(false)   

    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.readOnly.name).toEqual('boolean')
        expect(typeof wrapper.vm.readOnly.description).toEqual('boolean')
        expect(typeof wrapper.vm.removeEfectiveThrough).toEqual('string')   
        expect(typeof wrapper.vm.showHeader).toEqual('boolean')   
        expect(typeof wrapper.vm.dateMandatory).toEqual('boolean')   
        expect(typeof wrapper.vm.locationMandatory).toEqual('boolean')   
        expect(typeof wrapper.vm.templateId).toEqual('string')   
        expect(typeof wrapper.vm.templateUrl).toEqual('string') 
        expect(typeof wrapper.vm.templateForm.name).toEqual('string')
        expect(typeof wrapper.vm.templateForm.description).toEqual('string')
        expect(typeof wrapper.vm.templateForm.effective_from).toEqual('string')
        expect(typeof wrapper.vm.templateForm.effective_to).toEqual('string')
        expect(typeof wrapper.vm.templateForm.default_time_zone_id).toEqual('object')
        expect(typeof wrapper.vm.templateForm.first_day_of_week).toEqual('string')
        expect(typeof wrapper.vm.templateForm.enabled).toEqual('boolean')
        expect(typeof wrapper.vm.templateForm.show_week_numbers).toEqual('boolean')  
        expect(typeof wrapper.vm.templateForm.activities).toEqual('object')
        expect(typeof wrapper.vm.templateForm.removed).toEqual('object')
        expect(typeof wrapper.vm.templateForm.dates).toEqual('object')
        expect(typeof wrapper.vm.activityTypes).toEqual('object')   
        expect(typeof wrapper.vm.showLocation).toEqual('object')   
        expect(typeof wrapper.vm.appointmentTypes).toEqual('object')   
        expect(typeof wrapper.vm.dataCypress).toEqual('string')   
        expect(typeof wrapper.vm.multiLocation).toEqual('boolean')   
        expect(typeof wrapper.vm.names).toEqual('string')   
        expect(typeof wrapper.vm.resource).toEqual('boolean')   
        expect(typeof wrapper.vm.erMessage).toEqual('string')   
        expect(typeof wrapper.vm.copyResourceSchedule).toEqual('boolean')   
        expect(typeof wrapper.vm.scheduleEdit).toEqual('boolean')   
        expect(typeof wrapper.vm.copyTemplate).toEqual('boolean')  
    })

    it('is mocking function properly',()=>{

        wrapper.vm.effectiveError("Invalid date")
        expect(wrapper.vm.errorMsgEffectiveFrom).toEqual("Invalid Date")
        wrapper.setData({
            names:"Resource-Schedule",
            customData:[{activityId:"0",name:"activity1",description:"customData1"}],
            templateForm:{
                activities:[{id:"0",name:"activity1"},{id:"1",name:"activity2"}]
            }
        })
        wrapper.vm.error("This is a template error msg.")
        expect(wrapper.emitted()["template-error-msg"][0][0]).toEqual("This is a template error msg.")
        wrapper.setData({customeData:{
            identifier:"",
            frequency:"CUSTOM",
            id:0,
            r_dates:[],
        
        }})
        const template={
            identifier:"",
            frequency:"CUSTOM",
            id:0,
        }

        const item={
            id: 0,
            name: "item1",
            alias: "alias1",
            description: "This is an item description.",
            document: "",
            is_enabled: true,
            templates: [],
            location_ids: ["0","1"]        
        }

        const form={
            name: "form1",
            description: "This is a form description.",
            effective_from: "2022/05/31",
            effective_to: "2099/12/31",
            default_time_zone_id: null,
            first_day_of_week: 1,
            enabled: true,
            show_week_numbers: false,
            activities: [{
                activity_from:"2022/06/30",
                activity_to:"2099/11/30",
                from:"12:00 PM",
                to:"06:00 PM",
                activity_type_name:"activityType1"
            }],
            removed: [],
            dates: [],
            activity_from:"2022/05/31 12:00 PM",
            activity:{
                activity_from:"2022/06/30",
                activity_to:"2099/11/30",
                from:"12:00 PM",
                to:"06:00 PM",
                activity_type_name:"activityType1"
            },
            

        }
        const isValid=true;
        wrapper.vm.deleteAddedHours(0,template)
        console.log(wrapper.vm.templateForm)
        wrapper.setData({
            isEditing:false,
            index:-1
        })
        wrapper.vm.editAddedHours(0,item)
        expect(wrapper.vm.isEditing).toEqual(true)
        expect(wrapper.vm.index).toEqual(0)
        expect(wrapper.vm.item.name).toEqual("item1")
        expect(wrapper.vm.item.location_ids).toEqual(["0","1"])
        const activity={
            number_of_occurences:0,
            activity_name: "",
            activity_type_id: "",
            appointment_type_ids: [],
            activity_from: "2022/06/30",
            activity_to: "2099/11/30",
            location_ids: null,
            allDay: false,
            from: "",
            to: "",
            frequency: "DAILY",
            select_week_number: "",
            appointment_block_override: false,
            repeat_every: 1,
            red: 64,
            repeat_in_week: "01",
            days: ["MO", "TU", "WE", "TH", "FR", "SA", "SU"],
            yearly_month_first_dropdown: 1,
            yearly_month_second_dropdown: 1,
            r_dates: ["2022/05/31","2022/06/30"],
            weeks: 1,
            first_day_textfield: 1,
            second_day_textfield: "MO",
            radio_btn: "one",
            ends: "on",
            afterCount: "1",
        }
        const response={
            check:null,
            value:""
        }
        wrapper.vm.occurenceEndDate(activity,form)
        wrapper.setData({
            templateForm:form
        })
        expect(wrapper.vm.getDateByWeekAndMonth("2022/05/31","Tuesday",2).format("YYYY/MM/DD")).toEqual("2022/05/08")
        wrapper.vm.breakCheck(activity,response)
        wrapper.vm.appointmentBlockCheck(activity,response)
        expect(response.check).toEqual(false)
        wrapper.vm.workingHourCheck(activity,response)
        expect(response.check).toEqual(false)
        wrapper.vm.outOfOfficeCheck(activity,response)
        wrapper.vm.fetchCategories()
        wrapper.vm.availableLocation()
        wrapper.vm.fetchTemplateData()
        wrapper.setData({templateForm:form})
        wrapper.vm.emitForm()
        expect(wrapper.emitted()["form"][2][0].name).toEqual("form1")
        expect(wrapper.emitted()["form"][2][0].description).toEqual("This is a form description.")
        wrapper.vm.effectiveDefault("2099/12/31")
        expect(wrapper.vm.templateForm.effective_to).toEqual("2099/12/31")
        wrapper.vm.setEffectiveFrom("2022/05/31")
        expect(wrapper.vm.templateForm.effective_from).toEqual("2022/05/31")        
        expect(typeof wrapper.vm.dateRules("2022/04/30")[0]).toEqual("function")
        wrapper.vm.setDefaultTimeZone()
        wrapper.setData({
            templateForm:{
                first_day_of_week:1
            }
        })
        wrapper.vm.setFirstDayOfTheWeek(2)
        expect(wrapper.vm.templateForm.first_day_of_week).toEqual(2)
        wrapper.vm.resetActivity(activity)
        const locs=[{id:"0",name:"location1"},{id:"1",name:"location2"}]
        wrapper.vm.setLocations(locs)
        expect(wrapper.emitted()["locations"][0][0][0].id).toEqual("0")
        expect(wrapper.emitted()["locations"][0][0][0].name).toEqual("location1")
    })
});