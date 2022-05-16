import { shallowMount,mount } from '@vue/test-utils';
import AddAppointmentStatus from '../../../modules/appointment/components/AddAppointmentStatus';
import 'whatwg-fetch'


describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount(AddAppointmentStatus,{
            propsData: { headers: ["header1","header2","header3"] },
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
        expect(wrapper.vm.headers).toEqual(["header1","header2","header3"])
        
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.headers).toEqual('object')
    })

    it('is mocking function properly',()=>{
        wrapper.vm.error("This is an error")
        expect(wrapper.vm.errorMessage).toEqual("This is an error")
        wrapper.vm.cancelData()
        expect(wrapper.vm.dialog).toEqual(true)
        wrapper.vm.confirmDialog("cancel")
        expect(wrapper.vm.editedIndex).toEqual(-1)
        expect(wrapper.vm.dialog).toEqual(false)
        wrapper.vm.cancelConfirmDialog()
        expect(wrapper.vm.dialog).toEqual(false)
        wrapper.setData({emptyForm:{
            id: 0,
            name: "",
            alias: "",
            action: "",
            description: "",
            valid_transition: [],
            document: "",
            is_enabled: false,
            visibility: true,
          }})
        wrapper.vm.cancelData()
        expect(wrapper.vm.dialog).toEqual(false)
        expect(wrapper.vm.errorMessage).toEqual("")
        expect(wrapper.vm.editedIndex).toEqual(-1)
        expect(wrapper.vm.uniqueValidTransition({id:0,valid_transition_flag:true})).toEqual(false)
        expect(wrapper.vm.uniqueValidTransition({id:1,valid_transition_flag:true})).toEqual(true)
        wrapper.vm.setValidTransition(["transition1","transition2"])
        expect(wrapper.vm.editedItem.valid_transition).toEqual(["transition1","transition2"])
        wrapper.vm.setTableParams({sort:"sort"})
        expect(wrapper.vm.tableParams.sort).toEqual("sort")
        wrapper.vm.printDocument() // this.printDataTable()
        wrapper.setData({appointmentStatusList:[
            {
                id: 0,
                name: "appointmentStatus1",
                alias: "",
                action: "",
                description: "",
                valid_transition: [],
                document: "",
                is_enabled: false,
                visibility: true,
            },
            {
                id: 1,
                name: "appointmentStatus2",
                alias: "",
                action: "",
                description: "",
                valid_transition: [],
                document: "",
                is_enabled: false,
                visibility: true,
            }
        ]})
        wrapper.setData({statusChanges:true})
        expect(wrapper.vm.statusChanges).toEqual(true)
        const item={
            id: 1,
            name: "appointmentStatus2",
            alias: "",
            action: "",
            description: "",
            valid_transition: [],
            document: "",
            is_enabled: false,
            visibility: true,
        }
        wrapper.vm.editItem(item)
        expect(wrapper.vm.statusChanges).toEqual(false)
        expect(wrapper.vm.editedIndex).toEqual(-1)
        expect(wrapper.vm.editedItem.name).toEqual("appointmentStatus2")
        expect(wrapper.vm.emptyForm.id).toEqual(1)
        wrapper.vm.deleteItem(item)
        expect(wrapper.vm.dialog).toEqual(true)
        expect(wrapper.vm.deleteIndex).toEqual(-1)
        wrapper.vm.getAppointmentStatuses()
        wrapper.setData({tableParams:{
            sort:"sort"
        }})
        wrapper.vm.downloadDocument("EXCEL")
        wrapper.vm.printDocument()
        wrapper.vm.deleteAppointmentStatus()
        wrapper.vm.fetchData()
        wrapper.vm.addOrUpdateAppointmentStatus("")
        wrapper.vm.save()
        wrapper.setData({
            errorMessage:"This is an error message.",
            statusChanges:false,
            switch:false,
            editedIndex:0
        })
        wrapper.vm.changeStatus(item)
        expect(wrapper.vm.statusChanges).toEqual(true)
        expect(wrapper.vm.switch).toEqual(true)
        expect(wrapper.vm.errorMessage).toEqual("")
        expect(wrapper.vm.editedItem.id).toEqual(0)
        expect(wrapper.vm.editedItem.name).toEqual("")
        expect(wrapper.vm.editedIndex).toEqual(-1)
    })
});