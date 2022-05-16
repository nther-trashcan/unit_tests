import { shallowMount,mount, createLocalVue  } from '@vue/test-utils';
import TemplateCalendar from '../../../modules/common/components/TemplateCalendar';
import VueRouter from 'vue-router';

const localVue=createLocalVue();
localVue.use(VueRouter)
const router=new VueRouter();

describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount(TemplateCalendar,{
            localVue,
            router,
            propsData:{
                appointmentStatusList: [],
                activities: [],
                appointmentTypes: [],
                activityTypes: [],
                locations: [],
                enableAppointmentClick: false,
                editDialog: true,
                rightClick: true,
                enableCellClick:false,
                calendarDate: "",
                firstDayOfWeek: "SUNDAY",
                itemText: "name",
                tooltipItemKey: "name",
                reset: false,
                view: "MONTH_VIEW",
                timezone: "",
                height: 700,
                showExternalViews: false,
                resourceSchedule: [],
                newlyCreatedAppointmentId: 0,
                name: "Calendar-View",
                showDateOnCal: false,
                scrollToId: "",
                patientView: false,
                patientIds: 0,
                providers: [],
                formProviders:[],
                showWeekNumbers: true,
                endDate: "",
                startDate: "",
                filterParams: "",
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
        expect(wrapper.vm.appointmentStatusList).toEqual([])  
        expect(wrapper.vm.activities).toEqual([])
        expect(wrapper.vm.appointmentTypes).toEqual([])
        expect(wrapper.vm.activityTypes).toEqual([])
        expect(wrapper.vm.locations).toEqual([])
        expect(wrapper.vm.enableAppointmentClick).toEqual(false)
        expect(wrapper.vm.editDialog).toEqual(true)
        expect(wrapper.vm.rightClick).toEqual(true)
        expect(wrapper.vm.enableCellClick).toEqual(false)
        expect(wrapper.vm.calendarDate).toEqual("")
        expect(wrapper.vm.firstDayOfWeek).toEqual("SUNDAY")
        expect(wrapper.vm.itemText).toEqual("name")
        expect(wrapper.vm.tooltipItemKey).toEqual("name")
        expect(wrapper.vm.reset).toEqual(false)
        expect(wrapper.vm.view).toEqual("MONTH_VIEW")
        expect(wrapper.vm.timezone).toEqual("")
        expect(wrapper.vm.height).toEqual(700)
        expect(wrapper.vm.showExternalViews).toEqual(false)
        expect(wrapper.vm.resourceSchedule).toEqual([])
        expect(wrapper.vm.newlyCreatedAppointmentId).toEqual(0)
        expect(wrapper.vm.name).toEqual("Calendar-View")
        expect(wrapper.vm.showDateOnCal).toEqual(false)
        expect(wrapper.vm.scrollToId).toEqual("")
        expect(wrapper.vm.patientView).toEqual(false)
        expect(wrapper.vm.patientIds).toEqual(0)
        expect(wrapper.vm.providers).toEqual([])
        expect(wrapper.vm.formProviders).toEqual([])
        expect(wrapper.vm.showWeekNumbers).toEqual(true)
        expect(wrapper.vm.endDate).toEqual("")
        expect(wrapper.vm.startDate).toEqual("")
        expect(wrapper.vm.filterParams).toEqual("")
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.appointmentStatusList).toEqual('object')  
        expect(typeof wrapper.vm.activities).toEqual('object')
        expect(typeof wrapper.vm.appointmentTypes).toEqual('object')
        expect(typeof wrapper.vm.activityTypes).toEqual('object')
        expect(typeof wrapper.vm.locations).toEqual('object')
        expect(typeof wrapper.vm.enableAppointmentClick).toEqual('boolean')
        expect(typeof wrapper.vm.editDialog).toEqual('boolean')
        expect(typeof wrapper.vm.rightClick).toEqual('boolean')
        expect(typeof wrapper.vm.enableCellClick).toEqual('boolean')
        expect(typeof wrapper.vm.calendarDate).toEqual('string')
        expect(typeof wrapper.vm.firstDayOfWeek).toEqual('string')
        expect(typeof wrapper.vm.itemText).toEqual('string')
        expect(typeof wrapper.vm.tooltipItemKey).toEqual('string')
        expect(typeof wrapper.vm.reset).toEqual('boolean')
        expect(typeof wrapper.vm.view).toEqual('string')
        expect(typeof wrapper.vm.timezone).toEqual('string')
        expect(typeof wrapper.vm.height).toEqual('number')
        expect(typeof wrapper.vm.showExternalViews).toEqual('boolean')
        expect(typeof wrapper.vm.resourceSchedule).toEqual('object')
        expect(typeof wrapper.vm.newlyCreatedAppointmentId).toEqual('number')
        expect(typeof wrapper.vm.name).toEqual('string')
        expect(typeof wrapper.vm.showDateOnCal).toEqual('boolean')
        expect(typeof wrapper.vm.scrollToId).toEqual('string')
        expect(typeof wrapper.vm.patientView).toEqual('boolean')
        expect(typeof wrapper.vm.patientIds).toEqual('number')
        expect(typeof wrapper.vm.providers).toEqual('object')
        expect(typeof wrapper.vm.formProviders).toEqual('object')
        expect(typeof wrapper.vm.showWeekNumbers).toEqual('boolean')
        expect(typeof wrapper.vm.endDate).toEqual('string')
        expect(typeof wrapper.vm.startDate).toEqual('string')
        expect(typeof wrapper.vm.filterParams).toEqual('string')
    })

});