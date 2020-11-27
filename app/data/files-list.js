import { tracked } from "@glimmer/tracking";
class File {
  @tracked id;
  @tracked name;
  @tracked device;
  @tracked path;
  @tracked isChecked;
  @tracked status;

  constructor(file) {
    this.id = file.id;
    this.name = file.name;
    this.device = file.device;
    this.path = file.path;
    this.isChecked = file.isChecked;
    this.status = file.status;
  }
}

const list = [
  {
    id: 1,
    name: "smss.exe",
    device: "Stark",
    path: "\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe",
    isChecked: false,
    status: "scheduled"
  },
  {
    id: 2,
    name: "netsh.exe",
    device: "Targaryen",
    path: "\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe",
    isChecked: false,
    status: "available"
  },
  {
    id: 3,
    name: "uxtheme.dll",
    device: "Lannister",
    path: "\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll",
    isChecked: false,
    status: "available"
  },
  {
    id: 4,
    name: "cryptbase.dll",
    device: "Martell",
    path: "\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll",
    isChecked: false,
    status: "scheduled"
  },
  {
    id: 5,
    name: "7za.exe",
    device: "Baratheon",
    path: "\\Device\\HarddiskVolume1\\temp\\7za.exe",
    isChecked: false,
    status: "scheduled"
  }
];

export default list.map(listItem => new File(listItem));
