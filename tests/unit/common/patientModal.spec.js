import { shallowMount,mount } from '@vue/test-utils';
import patientModal from '../../../modules/common/components/patientModal';


describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount(patientModal,{
            propsData:{
                patientInfo: {},
                open: false,
                width: "80" ,
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
        expect(wrapper.vm.patientInfo).toEqual({})   
        expect(wrapper.vm.open).toEqual(false)   
        expect(wrapper.vm.width).toEqual("80")   

    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.patientInfo).toEqual('object')
        expect(typeof wrapper.vm.open).toEqual('boolean')
        expect(typeof wrapper.vm.width).toEqual('string')    
    })

    it('is mocking function properly',()=>{
        wrapper.vm.closeModal()
        expect(wrapper.emitted()['close-modal'][0][0]).toEqual(undefined)
        
    })
});