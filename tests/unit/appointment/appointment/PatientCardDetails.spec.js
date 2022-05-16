import { shallowMount,mount } from '@vue/test-utils';
import PatientCardDetails from '../../../../modules/appointment/components/appointment/PatientCardDetails';


describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount(PatientCardDetails,{
            propsData:{
                vobGetterPermission:false ,
                patientData: {},                
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
        expect(wrapper.vm.vobGetterPermission).toEqual(false)
        expect(wrapper.vm.patientData).toEqual({})    
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.vobGetterPermission).toEqual('boolean')    
        expect(typeof wrapper.vm.patientData).toEqual('object')
    })

    it('is mocking function properly',()=>{
        wrapper.vm.openEligibleStatusModal({id:"0",name:"patient1"})
        expect(wrapper.emitted()["open-eligible-status-modal"][0][0].id).toEqual("0")
        expect(wrapper.emitted()["open-eligible-status-modal"][0][0].name).toEqual("patient1")
        expect(wrapper.vm.formatDate("2022/05/31"))
        wrapper.vm.refreshInsuranceEmit("0","0")
        expect(wrapper.emitted()["refresh-insurance"][0][0]).toEqual("0")
        expect(wrapper.emitted()["refresh-insurance"][0][1]).toEqual("0")

        
    })
});