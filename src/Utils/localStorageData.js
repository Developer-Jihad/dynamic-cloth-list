export default function getData() {
  const items = localStorage.getItem("formData");
  return JSON.parse(items) || [];
}
