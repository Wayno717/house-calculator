// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


var dict = {  
   "antrim" : 425000,
   "armagh" : 425000,
   "carlow" : 325000,
   "cavan" : 325000,
   "clare" : 350000,
   "cork" : 425000,
   "derry" : 425000,
   "donegal" : 325000,
   "down" : 425000,
   "dublin" : 425000,
   "fermanagh" : 425000,
   "galway" : 450000,
   "kerry" : 325000,
   "kildare" : 425000,
   "kilkenny" : 375000,
   "laois" : 375000,
   "leitrim" : 325000,
   "limerick" : 425000,
   "longford" : 325000,
   "louth" : 375000,
   "mayo" : 325000,
   "meath" : 425000,
   "monaghan" : 325000,
   "offaly" : 325000,
   "roscommon" : 325000,
   "sligo" : 325000,
   "tipperary" : 325000,
   "tyrone" : 425000,
   "waterford" : 425000,
   "westmeath" : 375000,
   "wexford" : 325000,
   "wicklow" : 475000
  };
  


    function recalculateData(){

            var inEllibable = false;
            console.log(pcSelect.value);
            if(pcSelect.value == "pcSHH" || !amFtb.checked)
                inEllibable = true;


                useFHS.disabled = inEllibable;
                useHTB.disabled = inEllibable;
                useLHAL.disabled = inEllibable;
                if(inEllibable){
                    useFHS.checked = false;
                    useHTB.checked = false;
                    useLHAL.checked = false;
                }

            
            var maxFHSAllowence =  dict[cSelect.value];
            
            
            if(useFHS.checked){
                hpSlider.max = maxFHSAllowence;
            }else{
                hpSlider.max = 1000000
            }
            var fhsHtb = 0.3;


            var hpValue = Number(hpSlider.value);
            hpMinLabel.innerHTML  = Number(hpSlider.min).toLocaleString('ie-EN', { style: 'currency', currency: 'EUR' });
            hpMaxLabel.innerHTML  = Number(hpSlider.max).toLocaleString('ie-EN', { style: 'currency', currency: 'EUR' });
            hpPriceLabel.value = hpValue;

            var minDeposit = hpValue * 0.1;
            var minMortgage = hpValue * 0.9;



            depositNeededLabel.value = Number(minDeposit).toLocaleString('ie-EN', { style: 'currency', currency: 'EUR' });
            mortgageNeededLabel.value = Number(minMortgage).toLocaleString('ie-EN', { style: 'currency', currency: 'EUR' });



            dpSlider.max = minDeposit * 3;


            var year1Value = Number(year1Number.value);
            var year2Value = Number(year2Number.value);
            var year3Value = Number(year3Number.value);
            var year4Value = Number(year4Number.value);
            var yearTotalValue = year1Value + year2Value + year3Value + year4Value;
            if(yearTotalValue > 30000)
                yearTotalValue = 30000;


            if(useHTB.checked){
                taxIncomeContainer.style.display = "block"
                fhsHtb = 0.2;
                var x = minDeposit - yearTotalValue;
                if(x < 0){
                    x  =0;
                }
                dpSlider.min = x;
                console.log(x);
            }else{
                dpSlider.min = minDeposit;
                taxIncomeContainer.style.display = "none"
                fhsHtb = 0.3;
                yearTotalValue = 0;
            }

            yearTotalLabel.innerHTML = yearTotalValue.toLocaleString('ie-EN', { style: 'currency', currency: 'EUR' });



            var dpValue = Number(dpSlider.value);
            mLabel.innerHTML = mSlider.value;
            bSavingLabel.innerHTML = Math.round(dpSlider.value / mSlider.value).toLocaleString('ie-EN', { style: 'currency', currency: 'EUR' });
            bDepositLabel.innerHTML = Number(dpSlider.value).toLocaleString('ie-EN', { style: 'currency', currency: 'EUR' });
          
            bHouseLabel.innerHTML = hpValue.toLocaleString('ie-EN', { style: 'currency', currency: 'EUR' });

            totalDownpaymentLabel.innerHTML = Number(dpValue + yearTotalValue).toLocaleString('ie-EN', { style: 'currency', currency: 'EUR' })

            dpMinLabel.innerHTML = Number(dpSlider.min).toLocaleString('ie-EN', { style: 'currency', currency: 'EUR' });
            dpMaxLabel.innerHTML = Number(dpSlider.max).toLocaleString('ie-EN', { style: 'currency', currency: 'EUR' });
            dpPriceLabel.value = dpValue;

            var sValue = Number(sSlider.value);
            sMinLabel.innerHTML  = Number(sSlider.min).toLocaleString('ie-EN', { style: 'currency', currency: 'EUR' });
            sMaxLabel.innerHTML  = Number(sSlider.max).toLocaleString('ie-EN', { style: 'currency', currency: 'EUR' });
            sPriceLabel.value = sValue;

            var mortgageMultiplier = 4.0;
            if(useLHAL.checked){
                mortgageMultiplier = 4.25;
            }else if(!amFtb.checked){ 
                mortgageMultiplier = 3.5;
            }

            var maxMortgage = sValue * mortgageMultiplier;
            maxMortgageLabel.value = maxMortgage.toLocaleString('ie-EN', { style: 'currency', currency: 'EUR' });;

            var maxLHALMortgage = 297000;
            var mortgage = Math.min(maxMortgage, minMortgage);
            if(mortgage > maxLHALMortgage && useLHAL.checked){
                mortgage = maxLHALMortgage;
            }





            //mortgageP.value = Number(minMortgage).toLocaleString('ie-EN', { style: 'currency', currency: 'EUR' });
            //mortgageMP.value = Number(maxMortgage).toLocaleString('ie-EN', { style: 'currency', currency: 'EUR' });




            var outputValue = minDeposit + mortgage;
 

            var fhs = 0;


            //var cahBool = document.getElementById("cahBool");
            //vLabel.value = "YES";
            if(useFHS.checked)
            {
                            var maxFHS = maxFHSAllowence * fhsHtb;
                            var minFHS = hpValue - outputValue;
                            fhs = Math.min(maxFHS, minFHS);
                            fhsContainer.style.display = "block";
                            fhsOutput.value = "+" + fhs.toLocaleString('ie-EN', { style: 'currency', currency: 'EUR' });;
                            var fhsValue = document.getElementById("fhsValue");
                            var finalV = outputValue + fhs;
                  if(finalV <= hpValue)
                    finalV = hpValue;
                            fhsValue.value = finalV.toLocaleString('ie-EN', { style: 'currency', currency: 'EUR' });
                fhsContainer.style.display = "block";

            }else{
                fhsContainer.style.display = "none";
            }



            var moun = mortgage + fhs + dpValue + yearTotalValue
            //console.log(moun);
            if(moun >= hpValue)
            {
               yesDisplay.style.display = "block";
               noDisplay.style.display = "none";
            }else{
               yesDisplay.style.display = "none";
               noDisplay.style.display = "block";
            }

            bHPLabel.innerHTML = hpValue.toLocaleString('ie-EN', { style: 'currency', currency: 'EUR' })
            bBALabel.innerHTML = mortgage.toLocaleString('ie-EN', { style: 'currency', currency: 'EUR' })
            bDPLabel.innerHTML = dpValue.toLocaleString('ie-EN', { style: 'currency', currency: 'EUR' })
            bFHSLabel.innerHTML = fhs.toLocaleString('ie-EN', { style: 'currency', currency: 'EUR' })
            bHTBLabel.innerHTML = yearTotalValue.toLocaleString('ie-EN', { style: 'currency', currency: 'EUR' })

            //vLabel.value = outputValue;
            return 0;
    }

    recalculateData();