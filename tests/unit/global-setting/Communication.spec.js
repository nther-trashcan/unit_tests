import { shallowMount,mount } from '@vue/test-utils';
import Communication from '../../../modules/global-setting/components/Communication';


describe('Component', () => {
    let wrapper;

    const VueToastStub = {
        render: () => {},
        methods: {
            resetValidation: () => {},
            validate: () => {return true}
        }
      }
    
    
    beforeEach(() => {
        wrapper = shallowMount(Communication,{
            propsData: {
                communication: {},
                isEdit: false,
              },
              stubs: {
                VForm: VueToastStub,
            },
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
        expect(wrapper.vm.communication).toEqual({})
        expect(wrapper.vm.isEdit).toEqual(false)    
        
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.communication).toEqual('object')
        expect(typeof wrapper.vm.isEdit).toEqual('boolean')   
    })

    it('is mocking function properly',()=>{
        wrapper.vm.setPhoneFrom("phone_from_None")
        wrapper.vm.setPhoneTo("phone_to_None")
        expect(wrapper.vm.tableData).toEqual([])
        wrapper.vm.addTableData()
        wrapper.vm.emit()
        expect(wrapper.emitted().communication[0][0].phone_from).toEqual("phone_from_None")
        expect(wrapper.emitted().communication[0][0].phone_to).toEqual("phone_to_None")
        expect(wrapper.vm.communicationForm.phone_from).toEqual("")
        expect(wrapper.vm.communicationForm.phone_to).toEqual("")
        expect(wrapper.vm.edit).toEqual(false)
        wrapper.vm.editItem()
        expect(wrapper.vm.edit).toEqual(true)
        expect(wrapper.vm.communicationForm.phone_from).toEqual("phone_from_None")
        expect(wrapper.vm.communicationForm.phone_to).toEqual("phone_to_None")
        wrapper.vm.cancelSave()
        expect(wrapper.vm.edit).toEqual(false)
        expect(wrapper.vm.communicationForm.phone_from).toEqual("")
        expect(wrapper.vm.communicationForm.phone_to).toEqual("")
        wrapper.vm.deleteAppointmentType()
        expect(wrapper.vm.tableData).toEqual([])
        
        
        
        
    })
});