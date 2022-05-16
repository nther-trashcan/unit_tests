import { shallowMount,mount } from '@vue/test-utils';
import AppointmentForm from '../../../../modules/appointment/components/appointment/AppointmentForm';


describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount(AppointmentForm,{
            propsData: {
                userPermittedToCreate: false ,
                appointmentId: 0 ,
                editAppointment: {} ,
                createAppointment: {} ,
                apiMessage: [] ,
                localMessage: [] ,
                checkAvailability: false ,
                chips: true ,
                cellClickNewAppointment: false ,
                timezoneName: "" ,
                userLocations: [] ,
                patientList: {} ,
                resourceList: {} ,
                roomList: {} ,
                typeList: {} ,
                formData: {} ,
                rerenderCount: 0,
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
        expect(wrapper.vm.userPermittedToCreate).toEqual(false)
        expect(wrapper.vm.appointmentId).toEqual(0)    
        expect(wrapper.vm.editAppointment).toEqual({})
        expect(wrapper.vm.createAppointment).toEqual({})    
        expect(wrapper.vm.apiMessage).toEqual([])
        expect(wrapper.vm.localMessage).toEqual([])    
        expect(wrapper.vm.checkAvailability).toEqual(false)
        expect(wrapper.vm.chips).toEqual(true)    
        expect(wrapper.vm.cellClickNewAppointment).toEqual(false)
        expect(wrapper.vm.timezoneName).toEqual("")    
        expect(wrapper.vm.userLocations).toEqual([])
        expect(wrapper.vm.patientList).toEqual({})    
        expect(wrapper.vm.resourceList).toEqual({})    
        expect(wrapper.vm.roomList).toEqual({})    
        expect(wrapper.vm.typeList).toEqual({})    
        expect(wrapper.vm.formData).toEqual({})    
        expect(wrapper.vm.rerenderCount).toEqual(0)    
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.userPermittedToCreate).toEqual('boolean')
        expect(typeof wrapper.vm.appointmentId).toEqual('number')    
        expect(typeof wrapper.vm.editAppointment).toEqual('object')
        expect(typeof wrapper.vm.createAppointment).toEqual('object')    
        expect(typeof wrapper.vm.apiMessage).toEqual('object')
        expect(typeof wrapper.vm.localMessage).toEqual('object')    
        expect(typeof wrapper.vm.checkAvailability).toEqual('boolean')
        expect(typeof wrapper.vm.chips).toEqual('boolean')    
        expect(typeof wrapper.vm.cellClickNewAppointment).toEqual('boolean')
        expect(typeof wrapper.vm.timezoneName).toEqual('string')    
        expect(typeof wrapper.vm.userLocations).toEqual('object')
        expect(typeof wrapper.vm.patientList).toEqual('object')    
        expect(typeof wrapper.vm.resourceList).toEqual('object')    
        expect(typeof wrapper.vm.roomList).toEqual('object')    
        expect(typeof wrapper.vm.typeList).toEqual('object')    
        expect(typeof wrapper.vm.formData).toEqual('object')    
        expect(typeof wrapper.vm.rerenderCount).toEqual('number') 
    })

    it('is mocking function properly',()=>{
        wrapper.vm.fetchedPatients([{id:"0",name:"patient1"},{id:"1",name:"patient2"}])
        expect(wrapper.emitted()["fetched-patients"][0][0][0].id).toEqual("0")
        expect(wrapper.emitted()["fetched-patients"][0][0][0].name).toEqual("patient1")
        wrapper.vm.resetCellClickNewAppointment()
        expect(wrapper.emitted()["reset-cellClickNewAppointment"][0][0]).toEqual(undefined)
        wrapper.vm.emitNotFoundPatients({id:"3",name:"patient4"})
        expect(wrapper.emitted()["non-found-patients"][0][0].id).toEqual("3")
        expect(wrapper.emitted()["non-found-patients"][0][0].name).toEqual("patient4")
        wrapper.vm.closeAddAppointmentSection()
        expect(wrapper.emitted()["close"][0][0]).toEqual(undefined)
        const form={
            frequency: "DAILY",
            select_week_number: "",
            appointment_block_override: true,
            repeat_every: 1,
            red: 64,
            repeat_in_week: "02",
            days: ["MO", "TU", "WE","TH","FR","SA","SU"],
            dates: [],
            weeks: 1,
            first_day_textfield: 1,
            second_day_textfield: "TU",
            yearly_month_first_dropdown: 2,
            yearly_month_second_dropdown: 3,
            radio_btn: "one",
            ends: "on",
            endDate: "2099/12/31",
            afterCount: 10,
            date: "2022/05/31",
            r_dates: [],
          }
        wrapper.vm.setAppointmentForm(form,true)
        expect(wrapper.emitted()["form"][0][0].frequency).toEqual("DAILY")
        expect(wrapper.emitted()["form"][0][0].date).toEqual("2022/05/31")
        expect(wrapper.emitted()["form"][0][0].repeat_every).toEqual(1)
        expect(wrapper.emitted()["form"][0][0].first_day_textfield).toEqual(1)
        expect(wrapper.emitted()["form"][0][0].second_day_textfield).toEqual("TU")
        expect(wrapper.emitted()["form"][0][0].endDate).toEqual("2099/12/31")
        expect(wrapper.emitted()["form"][0][0].ends).toEqual("on")
        expect(wrapper.emitted()["form"][0][0].afterCount).toEqual(10)
        expect(wrapper.emitted()["form"][0][1]).toEqual(true)
        wrapper.vm.openEligibleStatusModal({id:"0",name:"patient1"})
        expect(wrapper.emitted()["open-eligible-status-modal"][0][0].id).toEqual("0")
        expect(wrapper.emitted()["open-eligible-status-modal"][0][0].name).toEqual("patient1")
        wrapper.vm.close()
        expect(wrapper.emitted()["close"][0][0]).toEqual(undefined)
        wrapper.vm.setErrorMessage("This is an error message.")
        expect(wrapper.vm.errorMessage).toEqual("This is an error message.")
        
    })
});