import { shallowMount,mount } from '@vue/test-utils';
import WorkflowView from '../../../modules/global-setting/components/WorkflowView';
import 'whatwg-fetch'



describe('Component', () => {
    let wrapper;

    const VueToastStub = {
        render: () => {},
        methods: {
            resetValidation: () => {},
            validate:()=>{}
        }
      }
    
    
    beforeEach(() => {
        wrapper = mount(WorkflowView,{
            propsData: {
                workflowView:{}
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
        expect(wrapper.vm.workflowView).toEqual({})
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.workflowView).toEqual("object")
    })
});