import { shallowMount,mount } from '@vue/test-utils';
import FindAvailability from '../../../../modules/appointment/components/appointment/FindAvailability';
import 'whatwg-fetch'


const mockLocations=[];
describe('Component', () => {
    let wrapper;
    const VueStubForm={
        render:()=>{},
        methods:{
            reset:()=>{},
            validate:()=>{}
        }
    }
    
    beforeEach(() => {
        wrapper = shallowMount(FindAvailability, {
            propsData: {
                appointmentId: 0,
                chips: true ,
                locations: [],
                userLocations: [],
                patientList: {},
                resourceList: {},
                roomList: {},
                typeList: {},
                categoryApiCall: true ,
                categoriesList: {},

                formData:{
                    locations:[],
                    providers:[]
                }
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
        expect(wrapper.vm.appointmentId).toEqual(0)
        expect(wrapper.vm.chips).toEqual(true)    
        expect(wrapper.vm.locations).toEqual([])
        expect(wrapper.vm.userLocations).toEqual([])    
        expect(wrapper.vm.patientList).toEqual({})
        expect(wrapper.vm.resourceList).toEqual({})    
        expect(wrapper.vm.roomList).toEqual({})
        expect(wrapper.vm.typeList).toEqual({})    
        expect(wrapper.vm.categoryApiCall).toEqual(true)
        expect(wrapper.vm.categoriesList).toEqual({})    
        expect(wrapper.vm.formData.locations).toEqual([])
        expect(wrapper.vm.formData.providers).toEqual([])
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.appointmentId).toEqual('number')
        expect(typeof wrapper.vm.chips).toEqual('boolean')    
        expect(typeof wrapper.vm.locations).toEqual('object')
        expect(typeof wrapper.vm.userLocations).toEqual('object')    
        expect(typeof wrapper.vm.patientList).toEqual('object')
        expect(typeof wrapper.vm.resourceList).toEqual('object')    
        expect(typeof wrapper.vm.roomList).toEqual('object')
        expect(typeof wrapper.vm.typeList).toEqual('object')    
        expect(typeof wrapper.vm.categoryApiCall).toEqual('boolean')
        expect(typeof wrapper.vm.categoriesList).toEqual('object')    
        expect(typeof wrapper.vm.formData.locations).toEqual('object')
        expect(typeof wrapper.vm.formData.providers).toEqual('object')
    })

    it('is mocking function properly',()=>{
        expect(typeof wrapper.vm.startDateRules("Invalid date")[0]).toEqual("function")
        expect(typeof wrapper.vm.endDateRules("04/30/2022")[0]).toEqual("function")
        wrapper.setData({
            userLocations:[{id:"0",name:"location1"}]
        })
        wrapper.vm.locationValues()
        wrapper.vm.close()
        expect(wrapper.emitted()["close"][0][0]).toEqual(undefined)
        const resources=[{resource_id:"0",id:"0",name:"resource1"}]
        const patients=[{patient_id:"0",id:"0",name:"patient1"}]
        const room=[{id:"0",name:"room1"},{id:"1",name:"room2"}]
        const appointmentTypes=[
            {id:0,name:"appointmentType1"},{id:1,name:"appointmentType2"},{id:"2",name:"appointmentType3"},
        ]
        wrapper.vm.setResource(resources[0])
        expect(wrapper.vm.form.resource.id).toEqual("0")
        expect(wrapper.vm.form.resource.name).toEqual("resource1")
        wrapper.vm.setStartDate("2022/05/31")
        expect(wrapper.vm.form.startDate).toEqual("2022/05/31")
        wrapper.vm.setEndDate("2099/12/31")
        expect(wrapper.vm.form.endDate).toEqual("2099/12/31")
        wrapper.vm.setLocations("0")
        expect(wrapper.vm.form.location_id).toEqual("0")
        
        wrapper.vm.setPatients(patients)
        wrapper.vm.setRoom(room)
        wrapper.vm.setAppointmentTypesList(appointmentTypes)
        expect(wrapper.vm.appointmentTypes[0].id).toEqual(0)
        expect(wrapper.vm.appointmentTypes[0].name).toEqual("appointmentType1")
        wrapper.vm.setAppointmentTypes(0)
        expect(wrapper.vm.form.duration).toEqual("")
        wrapper.vm.setRange("This Week")
        expect(wrapper.vm.form.range).toEqual("This Week")
        wrapper.vm.setSelectedDays(["MO","TU"])
        expect(wrapper.vm.form.selectedDays).toEqual(["MO","TU"])
        wrapper.vm.setPreferredTime(20)
        expect(wrapper.vm.form.preferredTime).toEqual(20)
        wrapper.vm.setDuration()
        wrapper.vm.cancelData()
        expect(wrapper.vm.confirmDialogConfirmButtonText).toEqual("Yes")
        wrapper.vm.confirmDialog()
        wrapper.vm.cancelConfirmDialog()
        wrapper.setData({
            confirmDialogMessage:"",
            confirmDialogConfirmButtonText:"",
            confirmDialogCancelButtonText:"",
            confirmDialogKey:"",
            dialog:false
        })
        wrapper.vm.clearForm()
        expect(wrapper.vm.confirmDialogMessage).toEqual("Are you sure you want to clear the page?")
        expect(wrapper.vm.confirmDialogConfirmButtonText).toEqual("clear")
        expect(wrapper.vm.confirmDialogCancelButtonText).toEqual("cancel")
        expect(wrapper.vm.confirmDialogKey).toEqual("clear")
        expect(wrapper.vm.dialog).toEqual(true)
        wrapper.vm.showDaysPicker()
        expect(wrapper.vm.dayPicker).toEqual(true)
        wrapper.vm.findData()
        wrapper.vm.clearData()
        expect(wrapper.vm.form.selectedDays).toEqual(["MO", "TU", "WE", "TH", "FR", "SA", "SU"])
        expect(wrapper.vm.showSlots).toEqual(false)
        const selectedData={
            resource:[{id:"0",name:"resource1"},{id:"1",name:"resource2"}],
            roomId:"0"
        }
        
        wrapper.vm.setSelectedData(selectedData)
        wrapper.vm.emitForm()
        wrapper.vm.fetchAppointment()
        wrapper.vm.findResult()
        wrapper.vm.findRange()
        const data={
            location_id:"0",
            appointment_type:{
                id:"0"
            },
            duration:"00:15",
            resources,
            range:"This Week",
            selectedDays:["TU"],
            preferredTime:20,
            first_available_slots:[],
            room,
            patients

        }
        wrapper.vm.buildForm(data)
        expect(wrapper.vm.form.range).toEqual("This Week")
        expect(wrapper.vm.form.selectedDays).toEqual(["TU"])
        wrapper.vm.durationRules()
        expect(typeof wrapper.vm.duration_rules[0]).toEqual('function')
        wrapper.vm.setDateTime({start:"12:00 PM",end:"06:00 PM"},{date:"2022/05/31"})
        expect(wrapper.vm.availabilityResult.date).toEqual("2022/05/31")
        expect(wrapper.vm.availabilityResult.startTime).toEqual("12:00 PM")
        expect(wrapper.vm.availabilityResult.endTime).toEqual("06:00 PM")
        wrapper.vm.createAppointment({id:"0",name:"appointment1",description:"Appointment to be created"})
        expect(wrapper.emitted()["createAppointment"][1][0].id).toEqual("0")
        expect(wrapper.emitted()["createAppointment"][1][0].name).toEqual("appointment1")
        expect(wrapper.emitted()["createAppointment"][1][0].description).toEqual("Appointment to be created")
        wrapper.setData({
            locations:[{id:"0",name:"location1"},{id:"1",name:"location2"}]
        })
        expect(wrapper.vm.setPatientsDropdown(["0","1","2"])).toEqual(undefined)
    })
});