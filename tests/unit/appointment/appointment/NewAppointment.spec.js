import { shallowMount,mount } from '@vue/test-utils';
import NewAppointment from '../../../../modules/appointment/components/appointment/NewAppointment';


describe('Component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(NewAppointment,{
            propsData:{
                userPermittedToCreate: false ,
                appointmentId: 0 ,
                editAppointment: {} ,
                createAppointment: {} ,
                apiMessage: [] ,
                localMessage: [] ,
                checkAvailability: false ,
                patientView: false ,
                patientIds: "" ,
                chips: true ,
                cellClickNewAppointment: false ,
                timezoneName:"" ,
                userLocations: [] ,
                patientList: {} ,
                resourceList: {} ,
                roomList: {} ,
                typeList: {} ,
                showTitle: true ,
            
                rerenderCount: 0 ,

                formData:{
                    locations:[],
                    providers:[]
                }
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
        expect(wrapper.vm.patientView).toEqual(false)    
        expect(wrapper.vm.patientIds).toEqual("")
        expect(wrapper.vm.chips).toEqual(true)    
        expect(wrapper.vm.cellClickNewAppointment).toEqual(false)
        expect(wrapper.vm.timezoneName).toEqual("")    
        expect(wrapper.vm.userLocations).toEqual([])    
        expect(wrapper.vm.patientList).toEqual({})    
        expect(wrapper.vm.resourceList).toEqual({})    
        expect(wrapper.vm.roomList).toEqual({})    
        expect(wrapper.vm.typeList).toEqual({})    
        expect(wrapper.vm.showTitle).toEqual(true)    
        expect(wrapper.vm.rerenderCount).toEqual(0)    
        expect(wrapper.vm.formData.locations).toEqual([])    
        expect(wrapper.vm.formData.providers).toEqual([])    

    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.userPermittedToCreate).toEqual('boolean')
        expect(typeof wrapper.vm.appointmentId).toEqual('number')    
        expect(typeof wrapper.vm.editAppointment).toEqual('object')
        expect(typeof wrapper.vm.createAppointment).toEqual('object')    
        expect(typeof wrapper.vm.apiMessage).toEqual('object')
        expect(typeof wrapper.vm.localMessage).toEqual('object')    
        expect(typeof wrapper.vm.checkAvailability).toEqual('boolean')
        expect(typeof wrapper.vm.patientView).toEqual('boolean')    
        expect(typeof wrapper.vm.patientIds).toEqual('string')
        expect(typeof wrapper.vm.chips).toEqual('boolean')    
        expect(typeof wrapper.vm.cellClickNewAppointment).toEqual('boolean')
        expect(typeof wrapper.vm.timezoneName).toEqual('string')    
        expect(typeof wrapper.vm.userLocations).toEqual('object')    
        expect(typeof wrapper.vm.patientList).toEqual('object')    
        expect(typeof wrapper.vm.resourceList).toEqual('object')    
        expect(typeof wrapper.vm.roomList).toEqual('object')    
        expect(typeof wrapper.vm.typeList).toEqual('object')    
        expect(typeof wrapper.vm.showTitle).toEqual('boolean')    
        expect(typeof wrapper.vm.rerenderCount).toEqual('number')    
        expect(typeof wrapper.vm.formData.locations).toEqual('object')    
        expect(typeof wrapper.vm.formData.providers).toEqual('object')    
    })
});