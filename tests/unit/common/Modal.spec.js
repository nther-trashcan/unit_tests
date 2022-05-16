import { shallowMount,mount } from '@vue/test-utils';
import Modal from '../../../modules/common/components/Modal';


describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount(Modal,{
            propsData: {
                openModal: false,
                title: "title",
                maxWidth: "600px" ,
                closeButtonText: "Close" ,
                submitButtonText: "Submit",
                dataCypress: "",
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
        expect(wrapper.vm.openModal).toEqual(false)
        expect(wrapper.vm.title).toEqual("title")    
        expect(wrapper.vm.maxWidth).toEqual("600px")
        expect(wrapper.vm.closeButtonText).toEqual("Close")    
        expect(wrapper.vm.submitButtonText).toEqual("Submit")
        expect(wrapper.vm.dataCypress).toEqual("")   
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.openModal).toEqual('boolean')
        expect(typeof wrapper.vm.title).toEqual('string')    
        expect(typeof wrapper.vm.maxWidth).toEqual('string')
        expect(typeof wrapper.vm.closeButtonText).toEqual('string')    
        expect(typeof wrapper.vm.submitButtonText).toEqual('string')
        expect(typeof wrapper.vm.dataCypress).toEqual('string')   
    })


    it('is mocking function properly',()=>{
        wrapper.vm.closeModal()
        expect(wrapper.emitted()["close-modal"][0][0]).toEqual(undefined)
        wrapper.vm.submit()
        expect(wrapper.emitted()["submit"][0][0]).toEqual(undefined)
        
    })
});