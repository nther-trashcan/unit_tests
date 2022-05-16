import { shallowMount,mount } from '@vue/test-utils';
import AppointmentType from '../../../modules/appointment/components/AppointmentType';
import 'whatwg-fetch'


describe('Component', () => {
    let wrapper;

    const VueStubForm={
        render:()=>{},
        methods:{
            validate:()=>{}
        }
    }
    
    beforeEach(() => {
        wrapper = shallowMount(AppointmentType,{
            propsData: {
                headers: ["header1","header2","header3"],
              },
            stubs:{
                VForm:VueStubForm
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
        expect(wrapper.vm.headers).toEqual(["header1","header2","header3"])
        
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.headers).toEqual('object')
    })

    it('is mocking function properly',()=>{
        const item={
            id: 0,
            name: "item1",
            alias: "item1",
            description: "This is a description",
            document: "",
            is_enabled: true,
            templates: [],
            location_ids: [],
        }
        expect(wrapper.vm.errorMessage).toEqual("")
        wrapper.vm.error("This is an error message.")
        expect(wrapper.vm.errorMessage).toEqual("This is an error message.")
        wrapper.setData({
            openModal:true,
            isEdit:true,
            isEditCopy:true,
            editedIndex:0,
            resetTable:false,
            editedItem:item
        })
        wrapper.vm.submitAndClose()
        expect(wrapper.vm.resetTable).toEqual(true)
        expect(wrapper.vm.errorMessage).toEqual("")
        expect(wrapper.vm.openModal).toEqual(false)
        expect(wrapper.vm.isEdit).toEqual(false)
        expect(wrapper.vm.isEditCopy).toEqual(false)
        expect(wrapper.vm.editedItem.name).toEqual("")
        expect(wrapper.vm.editedIndex).toEqual(-1)
        
        wrapper.setData({
            errorMessage:"This is an error message.",
            editedIndex:0,
            editedItem:item
        })
        wrapper.vm.changeStatus(item)
        expect(wrapper.vm.errorMessage).toEqual("")
        expect(wrapper.vm.statusChanges).toEqual(true)
        expect(wrapper.vm.editedIndex).toEqual(-1)
        expect(wrapper.vm.editedItem.name).toEqual("")
        wrapper.vm.editItem(item)
        expect(wrapper.vm.isEdit).toEqual(true)
        expect(wrapper.vm.editedItem.name).toEqual("item1")
        expect(wrapper.vm.editedItem.description).toEqual("This is a description")
        wrapper.setData({
            confirmDialogMessage:"",
            confirmDialogConfirmButtonText:"",
            confirmDialogCancelButtonText:"",
            confirmDialogKey:"",
            dialog:false,
            resetTable:true,
        })
        wrapper.vm.deleteAppointmentType(item)
        expect(wrapper.vm.confirmDialogTitle).toEqual("Remove Appointment ?")
        expect(wrapper.vm.confirmDialogMessage).toEqual("Are you sure you want to delete?")
        expect(wrapper.vm.confirmDialogConfirmButtonText).toEqual("delete")
        expect(wrapper.vm.confirmDialogCancelButtonText).toEqual("cancel")
        expect(wrapper.vm.confirmDialogKey).toEqual("delete")
        expect(wrapper.vm.dialog).toEqual(true)
        expect(wrapper.vm.resetTable).toEqual(false)
        expect(wrapper.vm.deleteItem.id).toEqual(0)
        expect(wrapper.vm.deleteItem.name).toEqual("item1")
        wrapper.vm.save()
        // wrapper.vm.Submit()
        wrapper.vm.addOrUpdateAppointmentType()
        wrapper.vm.deleteAppointmentTypeList()
        expect(wrapper.vm.dialog).toEqual(true)
        wrapper.vm.cancelConfirmDialog()
        expect(wrapper.vm.dialog).toEqual(false)
        wrapper.setData({
            errorMessage:"This is an error message.",
            isEdit:true,
            resetTable:true,
            openModal:false
        })
        wrapper.vm.addAppointmentType()
        expect(wrapper.vm.errorMessage).toEqual("")
        expect(wrapper.vm.isEdit).toEqual(false)
        expect(wrapper.vm.resetTable).toEqual(false)
        expect(wrapper.vm.openModal).toEqual(true)
        expect(wrapper.vm.getTemplate([{id:"0",document_data:[{name:"data1"}],document_category:"category1"},{id:"1",document_data:[{name:"data2"}],document_category:"category2"}],"category1")).toEqual([undefined])
        expect(wrapper.vm.getTemplateText([{id:"0",document_data:[{name:"data1"}]},{id:"1",document_data:[{name:"data2"}]}])).toEqual("data1, data2")
        wrapper.vm.setTableParams({id:"0",name:"tableData1",params:["parameter1"],sort:"sort"})
        expect(wrapper.vm.tableParams.id).toEqual("0")
        expect(wrapper.vm.tableParams.name).toEqual("tableData1")
        expect(wrapper.vm.tableParams.params[0]).toEqual("parameter1")
        wrapper.vm.printDocument()
        wrapper.setData({
            confirmDialogMessage:"",
            confirmDialogConfirmButtonText:"",
            confirmDialogCancelButtonText:"",
            confirmDialogKey:"",
            dialog:false,
            resetTable:true,
        })
        wrapper.vm.bulkAction("delete")
        expect(wrapper.vm.confirmDialogTitle).toEqual("Remove Appointments ?")
        expect(wrapper.vm.confirmDialogMessage).toEqual("Are you sure you want to delete?")
        expect(wrapper.vm.confirmDialogConfirmButtonText).toEqual("delete")
        expect(wrapper.vm.confirmDialogCancelButtonText).toEqual("cancel")
        expect(wrapper.vm.confirmDialogKey).toEqual("delete-all")
        expect(wrapper.vm.dialog).toEqual(true)
        wrapper.vm.bulkAction("disable")
        expect(wrapper.vm.confirmDialogTitle).toEqual("Disable selected Appointments ?")
        expect(wrapper.vm.confirmDialogMessage).toEqual("Are you sure you want to disable ?")
        expect(wrapper.vm.confirmDialogConfirmButtonText).toEqual("Disable")
        expect(wrapper.vm.confirmDialogCancelButtonText).toEqual("cancel")
        expect(wrapper.vm.confirmDialogKey).toEqual("disable-all")
        expect(wrapper.vm.dialog).toEqual(true)
        wrapper.vm.bulkAction("enable")
        expect(wrapper.vm.confirmDialogTitle).toEqual("Enable selected Appointments ?")
        expect(wrapper.vm.confirmDialogMessage).toEqual("Are you sure you want to enable ?")
        expect(wrapper.vm.confirmDialogConfirmButtonText).toEqual("Enable")
        expect(wrapper.vm.confirmDialogCancelButtonText).toEqual("cancel")
        expect(wrapper.vm.confirmDialogKey).toEqual("enable-all")
        expect(wrapper.vm.dialog).toEqual(true)
        wrapper.vm.confirmDialog("delete")
        wrapper.vm.bulkActionFunction("DELETE")
        wrapper.vm.enableToggleFunction({id:"0",name:"action1",is_enabled:true})
        wrapper.vm.setSelectedRecords([{id:"0",name:"record1",is_enabled:true},{id:"1",name:"record2",is_enabled:false}])
        wrapper.vm.downloadDocument("EXCEL")
        wrapper.vm.enabledisable([{id:"0",name:"record1",is_enabled:true},{id:"1",name:"record2",is_enabled:false}])
        wrapper.vm.resorceInUseCheck("delete","")
        expect(wrapper.vm.confirmDialogTitle).toEqual("Enable selected Appointments ?")
        expect(wrapper.vm.confirmDialogMessage).toEqual("This Appointment Type is associated with an existing resource or communication. Do you want to update ? Click 'OK' to confirm.")
        expect(wrapper.vm.confirmDialogConfirmButtonText).toEqual("ok")
        expect(wrapper.vm.confirmDialogCancelButtonText).toEqual("cancel")
        expect(wrapper.vm.confirmDialogKey).toEqual("delete")
        expect(wrapper.vm.dialog).toEqual(true)
        
        wrapper.vm.copyCommunication()
        wrapper.vm.fetchLocations() 
    })
});