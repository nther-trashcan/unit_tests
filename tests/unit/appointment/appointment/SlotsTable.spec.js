import { shallowMount,mount } from '@vue/test-utils';
import SlotsTable from '../../../../modules/appointment/components/appointment/SlotsTable';


describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = mount(SlotsTable,{
            propsData:{
                tableData: ["tableData1","tableData2","tableData3"],
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
        expect(wrapper.vm.tableData).toEqual(["tableData1","tableData2","tableData3"]) 
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.tableData).toEqual('object')
    })

    it('is mocking function properly',()=>{
        expect(wrapper.vm.selectedRecord).toEqual([])
        wrapper.vm.setSelectedRecords([{id:"0",name:"record1"},{id:"1",name:"record2"}])  
        expect(wrapper.vm.selectedRecord[1].id).toEqual("1")
        expect(wrapper.vm.selectedRecord[1].name).toEqual("record2")
        expect(wrapper.vm.selectedItem).toEqual({})
        wrapper.vm.createAppointment({id:"0",name:"item1"})
        expect(wrapper.emitted()["createAppointment"][0][0].id).toEqual("0")
        expect(wrapper.emitted()["createAppointment"][0][0].name).toEqual("item1")
    })
});