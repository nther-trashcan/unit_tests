import { shallowMount,mount } from '@vue/test-utils';
import PatientActions from '../../../../modules/appointment/components/appointment/PatientActions';


describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount(PatientActions,{
            propsData: {
                appointmentStatusList: [{id:"0",name:"appointmentStatus1",visibility:true},{id:"1",name:"appointmentStatus2",visibility:false}],
                patients: [{patient_status:{id:"0",name:"patient1"}},{patient_status:{id:"1",name:"patient2"}}],
                items: [],
                isViewAppointment:  false ,
                options:  true ,
                showDocuments:  true ,
                redText:  false ,
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
        expect(wrapper.vm.appointmentStatusList).toEqual([{id:"0",name:"appointmentStatus1",visibility:true},{id:"1",name:"appointmentStatus2",visibility:false}])
        expect(wrapper.vm.patients).toEqual([{patient_status:{id:"0",name:"patient1"}},{patient_status:{id:"1",name:"patient2"}}])
        expect(wrapper.vm.items).toEqual([])
        expect(wrapper.vm.isViewAppointment).toEqual(false)
        expect(wrapper.vm.options).toEqual(true)
        expect(wrapper.vm.showDocuments).toEqual(true)
        expect(wrapper.vm.redText).toEqual(false)
        
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.appointmentStatusList).toEqual('object')
        expect(typeof wrapper.vm.patients).toEqual('object')
        expect(typeof wrapper.vm.items).toEqual('object')
        expect(typeof wrapper.vm.isViewAppointment).toEqual('boolean')
        expect(typeof wrapper.vm.options).toEqual('boolean')
        expect(typeof wrapper.vm.showDocuments).toEqual('boolean')
        expect(typeof wrapper.vm.redText).toEqual('boolean')
    })
    

    it('is mocking function properly',()=>{
        wrapper.vm.documentClicked({id:"0",name:"patient1"},{id:"0",name:"document1",created:false,creatable:false})
        wrapper.emitted()["document-clicked"]
        wrapper.vm.goToPatientChart("0")
        wrapper.vm.openEligibleStatusModal({id:"0",name:"patient1"})
        wrapper.emitted()["open-eligible-status-modal"]
        wrapper.vm.refreshInsuranceEmit("0","0")
        expect(wrapper.emitted()["refresh-insurance"][0][0]).toEqual("0")
        expect(wrapper.emitted()["refresh-insurance"][0][1]).toEqual("0")
        wrapper.vm.show({id:"0",name:"patient1"})
        expect(wrapper.vm.editItem.id).toEqual("0")
        expect(wrapper.vm.editItem.name).toEqual("patient1")
        wrapper.vm.clickedItem({id:"0",name:"item1"})
        expect(wrapper.emitted()["on-change"][0][0].id).toEqual("0")
        expect(wrapper.emitted()["on-change"][0][0].name).toEqual("item1")
        wrapper.vm.linkClick({id:"0",name:"item1"})
        expect(wrapper.emitted()["change"][0][0].id).toEqual("0")
        expect(wrapper.emitted()["change"][0][0].name).toEqual("item1")
        const appointment=[{id:"0",name:"appointment1"},{id:"1",name:"appointment2"}];
        const statusList=[{id:"0",name:"appointmentStatus1",is_enabled:true},{id:"1",name:"appointmentStatus2",is_enabled:false},{id:"2",name:"appointmentStatus3",is_enabled:true}]
        expect(wrapper.vm.setValidTransition(appointment,statusList)[0].id).toEqual("0")
        expect(wrapper.vm.setValidTransition(appointment,statusList)[0].name).toEqual("appointment1")
        expect(wrapper.vm.getIcon({id:"0",name:"valid_transition1",})).toEqual(undefined)
        wrapper.vm.changeAppointmentStatus("0","1","appointmentStatus1")
        expect(wrapper.emitted()["on-change-status"][0][0]).toEqual("0")
        expect(wrapper.emitted()["on-change-status"][0][1]).toEqual("1")
        expect(wrapper.emitted()["on-change-status"][0][2]).toEqual("appointmentStatus1")
        wrapper.vm.hideVisibilityDisabledIds()
        expect(wrapper.vm.patientsData[0].patient_status.id).toEqual("0")
        expect(wrapper.vm.patientsData[0].patient_status.name).toEqual("patient1")


        
    })
});