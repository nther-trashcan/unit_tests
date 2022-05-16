import { shallowMount,mount } from '@vue/test-utils';
import ExportButtons from '../../../modules/common/components/ExportButtons';


describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount(ExportButtons,{
            propsData:{
                printButton: true,
                patientView: true,
                externalView:  "" ,
                cssClass:  "" ,
                exportButton: true,
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
        expect(wrapper.vm.printButton).toEqual(true)
        expect(wrapper.vm.patientView).toEqual(true)    
        expect(wrapper.vm.externalView).toEqual("")
        expect(wrapper.vm.cssClass).toEqual("")    
        expect(wrapper.vm.exportButton).toEqual(true)  
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.printButton).toEqual('boolean')
        expect(typeof wrapper.vm.patientView).toEqual('boolean')    
        expect(typeof wrapper.vm.externalView).toEqual('string')
        expect(typeof wrapper.vm.cssClass).toEqual('string')    
        expect(typeof wrapper.vm.exportButton).toEqual('boolean')  
    })

    it('is mocking function properly',()=>{
        wrapper.vm.printDocument()
        expect(wrapper.emitted().print[0][0]).toEqual(undefined)
        wrapper.vm.downloadDocument({id:"0",name:"type"})
        expect(wrapper.emitted().export[0][0].id).toEqual("0")
        expect(wrapper.emitted().export[0][0].name).toEqual("type")
        
    })
});