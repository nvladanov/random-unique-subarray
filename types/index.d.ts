declare module "removeduplicates" {
  export default function removeDuplicates<RecordType = any>(
    array: RecordType[],
    key?: string
  ): RecordType[];
}
