import { shallowMount,mount } from '@vue/test-utils';
import AppointmentHistory from '../../../../modules/appointment/components/appointment/AppointmentHistory';
import 'whatwg-fetch';
import moment from 'moment';


describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount(AppointmentHistory,{
            propsData: {
                appointmentId: 0,
                fileName: "",
                isGroupSession: false,
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
        expect(wrapper.vm.appointmentId).toEqual(0)
        expect(wrapper.vm.fileName).toEqual("")    
        expect(wrapper.vm.isGroupSession).toEqual(false)   
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.appointmentId).toEqual('number')
        expect(typeof wrapper.vm.fileName).toEqual('string')
        expect(typeof wrapper.vm.isGroupSession).toEqual('boolean')    
    })

    it('is mocking function properly',()=>{
        expect(wrapper.vm.multipleKeys("key1?!key2")).toEqual(true)
        expect(wrapper.vm.lableReplace("Patient")).toEqual("Patients")
        wrapper.vm.getHistory()
        expect(wrapper.vm.getTime("2022/05/31",{key:"Appointment Date"},{time_zone_info:{tzinfo_name:'America/Los_Angeles',short_name:"LOS"}})).toEqual(moment.utc("2022/05/31").tz('America/Los_Angeles').format("MM/DD/YYYY"))
        expect(wrapper.vm.getTimeAndTimezone({updatedAt:"2022/05/31"},{time_zone_info:{tzinfo_name:'America/Los_Angeles',short_name:"LOS"}})).toEqual(moment("2022/05/31").tz('America/Los_Angeles').format("hh:mm A")+" "+"LOS")
        expect(wrapper.vm.includesTime("This value includes","value")).toEqual(true)
        expect(wrapper.vm.getDayValue("",moment().format("MM/DD/YYYY"),"")).toEqual("Today")
        wrapper.vm.downloadDocument("EXCEL")

        
    })
});