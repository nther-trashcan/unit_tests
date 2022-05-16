import { shallowMount,mount } from '@vue/test-utils';
import GeneralSettings from '../../../modules/global-setting/components/GeneralSettings';


describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount(GeneralSettings,{
            propsData: {
                general_setting: {},
                isEdit: false,
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
        expect(wrapper.vm.general_setting).toEqual({})
        expect(wrapper.vm.isEdit).toEqual(false)      
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.general_setting).toEqual('object')
        expect(typeof wrapper.vm.isEdit).toEqual('boolean')
    })

    it('is mocking function properly',()=>{
        wrapper.vm.emit()
        expect(wrapper.emitted().generalSettings[0][0].default_date_format).toEqual("MM/DD/YYYY")
        expect(wrapper.emitted().generalSettings[0][0].no_of_overbooking_allowed).toEqual("3")
        expect(wrapper.emitted().generalSettings[0][0].duplicate_appointment_warning_enabled).toEqual(true)
        expect(wrapper.emitted().generalSettings[0][0].enable_automatic_document_creation).toEqual(true)
        expect(wrapper.emitted().generalSettings[0][0].morning_start_time).toEqual("08:00")
        expect(wrapper.emitted().generalSettings[0][0].morning_end_time).toEqual("12:00")
        expect(wrapper.emitted().generalSettings[0][0].afternoon_start_time).toEqual("12:00")
        expect(wrapper.emitted().generalSettings[0][0].afternoon_end_time).toEqual("15:00")
        expect(wrapper.emitted().generalSettings[0][0].evening_start_time).toEqual("15:00")
        expect(wrapper.emitted().generalSettings[0][0].evening_end_time).toEqual("18:00")
        expect(wrapper.emitted().generalSettings[0][0].default_time_zone).toEqual("Location")
        expect(wrapper.vm.defaultDate).toEqual("")
        wrapper.vm.setDefaultDateFormat("YYYY/MM/DD")
        expect(wrapper.vm.defaultDate).toEqual("YYYY/MM/DD")
        wrapper.vm.setOverbooking("5")
        wrapper.vm.setMorningStartTime("10:00")
        wrapper.vm.setMorningEndTime("14:00")
        wrapper.vm.setAfternoonStartTime("14:00")
        wrapper.vm.setAfternoonEndTime("17:00")
        wrapper.vm.setEveningStartTime("17:00")
        wrapper.vm.setEveningEndTime("20:00")
        wrapper.vm.emit()
        expect(wrapper.emitted().generalSettings[1][0].no_of_overbooking_allowed).toEqual("5")
        expect(wrapper.emitted().generalSettings[1][0].morning_start_time).toEqual("10:00")
        expect(wrapper.emitted().generalSettings[1][0].morning_end_time).toEqual("14:00")
        expect(wrapper.emitted().generalSettings[1][0].afternoon_start_time).toEqual("14:00")
        expect(wrapper.emitted().generalSettings[1][0].afternoon_end_time).toEqual("17:00")
        expect(wrapper.emitted().generalSettings[1][0].evening_start_time).toEqual("17:00")
        expect(wrapper.emitted().generalSettings[1][0].evening_end_time).toEqual("20:00")

    })
});