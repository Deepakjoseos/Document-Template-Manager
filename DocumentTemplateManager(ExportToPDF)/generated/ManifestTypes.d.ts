/*
*This is auto generated from the ControlManifest.Input.xml file
*/

// Define IInputs and IOutputs Type. They should match with ControlManifest.
export interface IInputs {
    sampleProperty: ComponentFramework.PropertyTypes.StringProperty;
    DownloadBy: ComponentFramework.PropertyTypes.StringProperty;
    DownloadDate: ComponentFramework.PropertyTypes.StringProperty;
    allowDownload: ComponentFramework.PropertyTypes.EnumProperty<"0" | "1">;
    allowEmail: ComponentFramework.PropertyTypes.EnumProperty<"0" | "1">;
    allowSaveToSharePoint: ComponentFramework.PropertyTypes.EnumProperty<"0" | "1">;
    enableForInactiveRecords: ComponentFramework.PropertyTypes.EnumProperty<"0" | "1">;
}
export interface IOutputs {
    sampleProperty?: string;
}
