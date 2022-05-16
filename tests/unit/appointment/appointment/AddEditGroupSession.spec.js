import { shallowMount,mount, createLocalVue  } from '@vue/test-utils';
import AddEditGroupSession from '../../../../modules/appointment/components/appointment/AddEditGroupSession';

describe('Component', () => {
    let wrapper;

    const VueToastStub = {
        render: () => {},
        methods: {
            resetValidation: () => {}
        }
      }
    
    beforeEach(() => {
        wrapper = mount(AddEditGroupSession,{
            // localVue,
            stubs: {
                VForm: VueToastStub,
            },
            propsData: {
                userPermittedToCreate: false ,
                groupSessionId: 0 ,
                createAppointment: {},
                checkAvailability: false ,
                chips: true ,
                timezone: "" ,
                locationsList:[] ,
                errorColumn: {} ,
                apiMessage:[] ,
                localMessage: [] ,
                warningMessage: "" ,
                userLocations:[] ,
                patientList: {},
                categoryApiCall: true ,
                categoriesList: {} ,
                patientView: false ,
                patientIds: "" ,
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
        expect(wrapper.vm.groupSessionId).toEqual(0)    
        expect(wrapper.vm.createAppointment).toEqual({})
        expect(wrapper.vm.checkAvailability).toEqual(false)    
        expect(wrapper.vm.chips).toEqual(true)
        expect(wrapper.vm.timezone).toEqual("")    
        expect(wrapper.vm.locationsList).toEqual([])
        expect(wrapper.vm.errorColumn).toEqual({})    
        expect(wrapper.vm.apiMessage).toEqual([])
        expect(wrapper.vm.localMessage).toEqual([])    
        expect(wrapper.vm.warningMessage).toEqual("")
        expect(wrapper.vm.userLocations).toEqual([])    
        expect(wrapper.vm.patientList).toEqual({})    
        expect(wrapper.vm.categoryApiCall).toEqual(true)
        expect(wrapper.vm.categoriesList).toEqual({})    
        expect(wrapper.vm.patientView).toEqual(false)    
        expect(wrapper.vm.patientIds).toEqual("")    
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.userPermittedToCreate).toEqual('boolean')
        expect(typeof wrapper.vm.groupSessionId).toEqual('number')    
        expect(typeof wrapper.vm.createAppointment).toEqual('object')
        expect(typeof wrapper.vm.checkAvailability).toEqual('boolean')    
        expect(typeof wrapper.vm.chips).toEqual('boolean')
        expect(typeof wrapper.vm.timezone).toEqual('string')    
        expect(typeof wrapper.vm.locationsList).toEqual('object')
        expect(typeof wrapper.vm.errorColumn).toEqual('object')    
        expect(typeof wrapper.vm.apiMessage).toEqual('object')
        expect(typeof wrapper.vm.localMessage).toEqual('object')    
        expect(typeof wrapper.vm.warningMessage).toEqual('string')
        expect(typeof wrapper.vm.userLocations).toEqual('object')    
        expect(typeof wrapper.vm.patientList).toEqual('object')    
        expect(typeof wrapper.vm.categoryApiCall).toEqual('boolean')
        expect(typeof wrapper.vm.categoriesList).toEqual('object')    
        expect(typeof wrapper.vm.patientView).toEqual('boolean')    
        expect(typeof wrapper.vm.patientIds).toEqual('string')   
    })

});