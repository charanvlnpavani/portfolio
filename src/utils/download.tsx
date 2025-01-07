export const downloadResume = () => {
  const fileUrl = "./files/frontend_charan.pdf"; // You can use an API or file URL
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = "Charan_VLN_Pavani_Resume.pdf"; // Optional: set the filename for the download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
