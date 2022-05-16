import { shallowMount,mount } from '@vue/test-utils';
import Migration from '../../../modules/appointments-migration/components/Migration';


describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount(Migration,{
            propsData:{
                apply: false,
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
        expect(wrapper.vm.apply).toEqual(false)   
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.apply).toEqual('boolean')
    })

    it('is mocking function properly',()=>{
        wrapper.vm.setResource({id:"0",name:"resource1"})
        expect(wrapper.vm.form.resource.id).toEqual("0")
        expect(wrapper.vm.form.resource.name).toEqual("resource1")
        wrapper.vm.setStartDate("2022/05/31")
        expect(wrapper.vm.form.startDate).toEqual("2022/05/31")
        wrapper.vm.setEndDate("2099/12/31")
        expect(wrapper.vm.form.endDate).toEqual("2099/12/31")
        wrapper.vm.setLocations("0")
        expect(wrapper.vm.form.location_id).toEqual("0")
        wrapper.vm.setGroupStartDate("2022/06/30")
        expect(wrapper.vm.group.startDate).toEqual("2022/06/30")
        wrapper.vm.setGroupEndDate("2099/11/30")
        expect(wrapper.vm.group.endDate).toEqual("2099/11/30")
        expect(wrapper.vm.appointmentImportCheck).toEqual(false)
        expect(wrapper.vm.appointmentImportComplete).toEqual(false)
        wrapper.vm.importAppointment()
        expect(wrapper.vm.appointmentImportCheck).toEqual(true)
        expect(wrapper.vm.appointmentImportComplete).toEqual(false)
        expect(wrapper.vm.sessionImportCheck).toEqual(false)
        expect(wrapper.vm.sessionImportComplete).toEqual(false)
        wrapper.vm.importSchedule()
        expect(wrapper.vm.sessionImportCheck).toEqual(true)
        expect(wrapper.vm.sessionImportComplete).toEqual(false)

    })
});