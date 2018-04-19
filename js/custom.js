// JavaScript Document
$(document).ready(function(e) {

  var sme_name = "";
  var sme_location = 0;
  var sme_age_business = 0;
  var sme_business_type = 0;
  var sme_business_organisation = 0;
  var sme_no_employee = 0;
  var sme_manager_experirence = 0;
  var sme_revenue = 0;
  var sme_expenditure = 0;
  var sme_profitability = 0;
  var sme_assets = 0;
  var sme_debt = 0;
  var sme_loan = 0;
  var sme_collateral_building = 0;
  var sme_collateral_land = 0;
  var sme_collateral_car = 0;
  var sme_collateral_cash = 0;
  var sme_collateral_equipment = 0;
  var sme_collateral_guarantor_letter = 0;
  var sme_finance_project = sme_document_sheet = 0;
  var sme_advisor = sme_document_certificate = sme_document_financial = sme_document_licence = sme_document_tin = sme_document_plan = sme_document_return = sme_document_projections = sme_document_resolution = 0;

  function initializeVariable () {
     sme_name = "";
     sme_location = 0;
     sme_age_business = 0;
     sme_business_type = 0;
     sme_business_organisation = 0;
     sme_no_employee = 0;
     sme_manager_experirence = 0;
     sme_revenue = 0;
     sme_expenditure = 0;
     sme_profitability = 0;
     sme_assets = 0;
     sme_debt = 0;
     sme_loan = 0;
     sme_collateral_building = 0;
     sme_collateral_land = 0;
     sme_collateral_car = 0;
     sme_collateral_cash = 0;
     sme_collateral_equipment = 0;
     sme_collateral_guarantor_letter = 0;
     sme_finance_project = sme_document_sheet = 0;
     sme_advisor = sme_document_certificate = sme_document_financial = sme_document_licence = sme_document_tin = sme_document_plan = sme_document_return = sme_document_projections = sme_document_resolution =  0;

  }

  $("#topagethree").click(function() {
      sme_name =  $("#sme-name").val();
      sme_location = $("#sme-location").val();
      sme_no_employee = $("#sme-no-employee").val();
      sme_manager_experirence = $("#sme-manager-experience").val();
      sme_age_business = $("#sme-age-business").val();
      sme_business_type = $("#sme-business-type").val();
      sme_business_organisation = $("#sme-business-organisation").val();
  //post code
  });


$("#topagefour").click(function() {
    sme_revenue =  $("#sme-revenue").val();
    sme_expenditure = $("#sme-expenditure").val();
    sme_profitability = $("#sme-profitability").val();
    sme_assets = $("#sme-asset").val();
    sme_debt = $("#sme-debt").val();

    if ($('input[name=sme-collateral-building]').is(':checked')) {
      sme_collateral_building = 1;
    }
    if ($('input[name=sme-collateral-equipment]').is(':checked')) {
      sme_collateral_equipment = 1;
    }
    if ($('input[name=sme-collateral-car]').is(':checked')) {
      sme_collateral_car = 1;
    }
    if ($('input[name=sme-collateral-cash]').is(':checked')) {
      sme_collateral_cash = 1;
    }
    if ($('input[name=sme-collateral-guarantor-letter]').is(':checked')) {
      sme_collateral_guarantor_letter = 1;
    }
    if ($('input[name=sme-collateral-land]').is(':checked')) {
      sme_collateral_land = 1;
    }

//post code
  });


  $("#topresult").click(function() {
      sme_loan =  $("#sme-loan").val();
      sme_finance_project = $("#sme-finance-project").val();
      sme_expenditure = $("#sme-expenditure").val();
      sme_profitability = $("#sme-profitability").val();
      sme_assets = $("#sme-asset").val();
      sme_debt = $("#sme-debt").val();

      if ($('input[name=sme-advisor-yes]').is(':checked')) {
        sme_advisor = 1;
      }
      if ($('input[name=sme-advisor-no]').is(':checked')) {
        sme_advisor = 1;
      }

      //sme documents
      if ($('input[name=sme-sme-document-certificate]').is(':checked')) {
        sme_document_certificate = 1;
      }
      if ($('input[name=sme-document-licence]').is(':checked')) {
        sme_document_licence = 1;
      }
      if ($('input[name=sme-document-tin]').is(':checked')) {
        sme_document_tin = 1;
      }
      if ($('input[name=sme-document-return]').is(':checked')) {
        sme_document_return = 1;
      }
      if ($('input[name=sme-document-sheet]').is(':checked')) {
        sme_document_sheet = 1;
      }
      if ($('input[name=sme-document-plan]').is(':checked')) {
        sme_document_plan = 1;
      }
      if ($('input[name=sme-document-resolution]').is(':checked')) {
        sme_document_resolution = 1;
      }
      if ($('input[name=sme-document-projections]').is(':checked')) {
        sme_document_projections = 1;
      }
      if ($('input[name=sme-document-financial]').is(':checked')) {
        sme_document_financial = 1;
      }


  //post code
    });

    /*On click of start over
	Set all values to default
	*/
    $('.start-over').click(function(){
        initializeVariable ();
        $('#hiddenPrice').html('0');
        $('#price').html('0');
        $('li').removeClass('selected-option');
        currentBridePrice = 0;

    });

});
