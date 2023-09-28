import React from "react";
import "./Faq.scss";
function FAQ() {
  return (
    <div className="container-fluid w-75">
      <h1 className="text-center">Faqs</h1>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What are the key differences between Lightroom and Lightroom
              Classic?
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Lightroom is cloud-based, so you can work across desktop, mobile
              and web with all your images automatically stored and synced in
              the cloud. Lightroom Classic is desktop-focused and best for those
              who prefer to store their images on a local hard drive
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Are Photoshop and Lightroom included in the Creative Cloud All
              Apps plan?
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Yes, Photoshop and Lightroom are both included. Learn more about
              Creative Cloud All Apps.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              How much does Photoshop cost?
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              There are several Creative Cloud plans that include Photoshop. You
              can purchase it as a stand-alone app for ₹1,675.60/month or opt
              for annual billing at ₹19,158.48/yr. Both options give you access
              to all the latest Photoshop features and updates and 100 GB of
              cloud storage. You can also purchase it as part of the Creative
              Cloud Photography plan for₹797.68/month or as part of the Creative
              Cloud All Apps plan for ₹4,230.30/month (₹47,889.12/yr prepaid).
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;

// What are the key differences between Lightroom and Lightroom Classic?
// Lightroom is cloud-based, so you can work across desktop, mobile and web with all your images automatically stored and synced in the cloud. Lightroom Classic is desktop-focused and best for those who prefer to store their images on a local hard drive

// Are Photoshop and Lightroom included in the Creative Cloud All Apps plan?
// Yes, Photoshop and Lightroom are both included. Learn more about Creative Cloud All Apps.

// How much does Photoshop cost?
// There are several Creative Cloud plans that include Photoshop. You can purchase it as a stand-alone app for ₹1,675.60/month or opt for annual billing at ₹19,158.48/yr. Both options give you access to all the latest Photoshop features and updates and 100 GB of cloud storage. You can also purchase it as part of the Creative Cloud Photography plan for₹797.68/month or as part of the Creative Cloud All Apps plan for ₹4,230.30/month (₹47,889.12/yr prepaid).
