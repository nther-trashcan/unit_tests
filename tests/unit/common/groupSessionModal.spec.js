import { shallowMount,mount } from '@vue/test-utils';
import groupSessionModal from '../../../modules/common/components/groupSessionModal';


describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount(groupSessionModal,{
            propsData:{
                open: false,
                width: "",
                noDataText: "",
                occurrenceScheduleHeader: {},
                isScheduleConflicted: false,
                groupScheduleOccurancesList: [],
                groupSessionForm: {},
                getInputLocation: "",
                getInputSchedule: "",
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
        expect(wrapper.vm.open).toEqual(false)
        expect(wrapper.vm.width).toEqual("")    
        expect(wrapper.vm.noDataText).toEqual("")
        expect(wrapper.vm.occurrenceScheduleHeader).toEqual({})    
        expect(wrapper.vm.isScheduleConflicted).toEqual(false)
        expect(wrapper.vm.groupScheduleOccurancesList).toEqual([])    
        expect(wrapper.vm.groupSessionForm).toEqual({})
        expect(wrapper.vm.getInputLocation).toEqual("")    
        expect(wrapper.vm.getInputSchedule).toEqual("")
        
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.open).toEqual('boolean')
        expect(typeof wrapper.vm.width).toEqual('string')    
        expect(typeof wrapper.vm.noDataText).toEqual('string')
        expect(typeof wrapper.vm.occurrenceScheduleHeader).toEqual('object')    
        expect(typeof wrapper.vm.isScheduleConflicted).toEqual('boolean')
        expect(typeof wrapper.vm.groupScheduleOccurancesList).toEqual('object')    
        expect(typeof wrapper.vm.groupSessionForm).toEqual('object')
        expect(typeof wrapper.vm.getInputLocation).toEqual('string')    
        expect(typeof wrapper.vm.getInputSchedule).toEqual('string')
    })

    it('is mocking function properly',()=>{
        wrapper.vm.closeModal()
        expect(wrapper.emitted()["close-modal"][0][0]).toEqual(undefined)
        wrapper.vm.printDocument()
        expect(wrapper.emitted()["printSessionDocument"][0][0]).toEqual(undefined)
        wrapper.vm.saveToPdf()
        expect(wrapper.emitted()["save-pdf-file"][0][0]).toEqual(undefined)
        
        
    })
});