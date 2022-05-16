import { shallowMount,mount } from '@vue/test-utils';
import ConfirmDialog from '../../../modules/common/components/ConfirmDialog';


describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount(ConfirmDialog,{
            propsData:{
                open: true,
                message: "message",
                action: "actionToBePerformed",
                maxWidth: "430px",
                confirmButtonText: "Confirm",
                cancelButtonText: "Cancel",
                thirdButtonText: "",
                disableCancel: false,
                dataCypress: "",
                customIndex: false,
                isInput: false,
                thirdButtonDisabled: false,
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
        expect(wrapper.vm.open).toEqual(true)
        expect(wrapper.vm.message).toEqual("message")    
        expect(wrapper.vm.action).toEqual("actionToBePerformed")
        expect(wrapper.vm.maxWidth).toEqual("430px")    
        expect(wrapper.vm.confirmButtonText).toEqual("Confirm")
        expect(wrapper.vm.cancelButtonText).toEqual("Cancel")    
        expect(wrapper.vm.thirdButtonText).toEqual("")
        expect(wrapper.vm.disableCancel).toEqual(false)    
        expect(wrapper.vm.dataCypress).toEqual("")
        expect(wrapper.vm.customIndex).toEqual(false)    
        expect(wrapper.vm.isInput).toEqual(false)
        expect(wrapper.vm.thirdButtonDisabled).toEqual(false)    
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.open).toEqual('boolean')
        expect(typeof wrapper.vm.message).toEqual('string')    
        expect(typeof wrapper.vm.action).toEqual('string')
        expect(typeof wrapper.vm.maxWidth).toEqual('string')    
        expect(typeof wrapper.vm.confirmButtonText).toEqual('string')
        expect(typeof wrapper.vm.cancelButtonText).toEqual('string')    
        expect(typeof wrapper.vm.thirdButtonText).toEqual('string')
        expect(typeof wrapper.vm.disableCancel).toEqual('boolean')    
        expect(typeof wrapper.vm.dataCypress).toEqual('string')
        expect(typeof wrapper.vm.customIndex).toEqual('boolean')    
        expect(typeof wrapper.vm.isInput).toEqual('boolean')
        expect(typeof wrapper.vm.thirdButtonDisabled).toEqual('boolean')     
    })

    it('is mocking function properly',()=>{
        wrapper.setData({reason:"reason1"})
        wrapper.vm.confirm()
        expect(wrapper.emitted().confirm[0][0]).toEqual("actionToBePerformed")
        expect(wrapper.emitted().confirm[0][1]).toEqual("reason1")
        expect(wrapper.vm.reason).toEqual("")
        wrapper.vm.cancel()
        expect(wrapper.emitted().cancel[0][0]).toEqual("actionToBePerformed")
        expect(wrapper.vm.reason).toEqual("")
        wrapper.vm.thirdButton()
        expect(wrapper.emitted().thirdButton[0][0]).toEqual("actionToBePerformed")        
    })
});