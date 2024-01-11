// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.



    function recalculateData(){



            var useFHSCheckbox = document.getElementById("useFHS");
            var useHTBCheckbox = document.getElementById("useHTB");
            var useLHAL = document.getElementById("useLHAL");
            var pcSelect = document.getElementById("pcSelect");
            var amFtb = document.getElementById("amFtb");

            var inEllibable = false;
            console.log(pcSelect.value);
            if(pcSelect.value == "pcSHH" || !amFtb.checked)
                inEllibable = true;


                useFHSCheckbox.disabled = inEllibable;
                useHTBCheckbox.disabled = inEllibable;
                useLHAL.disabled = inEllibable;
                if(inEllibable){
                    useFHSCheckbox.checked = false;
                    useHTBCheckbox.checked = false;
                    useLHAL.checked = false;
                }

            var hpSlider = document.getElementById("hpSlider");
            var taxIncomeContainer = document.getElementById("taxIncomeContainer");
            if(useFHSCheckbox.checked){
                hpSlider.max = 425000;
            }else{
                hpSlider.max = 1000000
            }
            var fhsHtb = 0.3;

            var maxFHSAllowence = 425000;

            var hpValue = Number(hpSlider.value);
            var hpMinLabel = document.getElementById("hpMinLabel");
            hpMinLabel.innerHTML  = Number(hpSlider.min).toLocaleString('ie-EN', { style: 'currency', currency: 'EUR' });
            var hpMaxLabel = document.getElementById("hpMaxLabel");
            hpMaxLabel.innerHTML  = Number(hpSlider.max).toLocaleString('ie-EN', { style: 'currency', currency: 'EUR' });
            var hpPriceLabel = document.getElementById("hpPriceLabel");
            hpPriceLabel.value = hpValue;

            var minDeposit = hpValue * 0.1;
            var minMortgage = hpValue * 0.9;



            var depositNeededLabel = document.getElementById("depositNeededLabel");
            depositNeededLabel.value = Number(minDeposit).toLocaleString('ie-EN', { style: 'currency', currency: 'EUR' });

            var mortgageNeededLabel = document.getElementById("mortgageNeededLabel");
            mortgageNeededLabel.value = Number(minMortgage).toLocaleString('ie-EN', { style: 'currency', currency: 'EUR' });



            var dpSlider = document.getElementById("dpSlider");
            dpSlider.max = minDeposit * 3;


            var year1Number = document.getElementById("year1Number");
            var year2Number = document.getElementById("year2Number");
            var year3Number = document.getElementById("year3Number");
            var year4Number = document.getElementById("year4Number");
            var year1Value = Number(year1Number.value);
            var year2Value = Number(year2Number.value);
            var year3Value = Number(year3Number.value);
            var year4Value = Number(year4Number.value);
            var yearTotalValue = year1Value + year2Value + year3Value + year4Value;
            var yearTotalLabel = document.getElementById("yearTotalLabel");
            var totalDownpaymentLabel = document.getElementById("totalDownpaymentLabel");
            if(yearTotalValue > 30000)
                yearTotalValue = 30000;


            if(useHTBCheckbox.checked){
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

            var bSavingLabel = document.getElementById("bSavingLabel");
            bSavingLabel.innerHTML = Math.round(dpSlider.min / 12).toLocaleString('ie-EN', { style: 'currency', currency: 'EUR' });
            var bDepositLabel = document.getElementById("bDepositLabel");
            bDepositLabel.innerHTML = Number(dpSlider.min).toLocaleString('ie-EN', { style: 'currency', currency: 'EUR' });
            var bHouseLabel = document.getElementById("bHouseLabel");
            bHouseLabel.innerHTML = hpValue.toLocaleString('ie-EN', { style: 'currency', currency: 'EUR' });

            totalDownpaymentLabel.innerHTML = Number(dpValue + yearTotalValue).toLocaleString('ie-EN', { style: 'currency', currency: 'EUR' })

            var dpMinLabel = document.getElementById("dpMinLabel");
            dpMinLabel.innerHTML = Number(dpSlider.min).toLocaleString('ie-EN', { style: 'currency', currency: 'EUR' });
            var dpMaxLabel = document.getElementById("dpMaxLabel");
            dpMaxLabel.innerHTML = Number(dpSlider.max).toLocaleString('ie-EN', { style: 'currency', currency: 'EUR' });
            var dpPriceLabel = document.getElementById("dpPriceLabel");
            dpPriceLabel.value = dpValue;

            var sSlider = document.getElementById("sSlider");
            var sValue = Number(sSlider.value);
            var sMinLabel = document.getElementById("sMinLabel");
            sMinLabel.innerHTML  = Number(sSlider.min).toLocaleString('ie-EN', { style: 'currency', currency: 'EUR' });
            var sMaxLabel = document.getElementById("sMaxLabel");
            sMaxLabel.innerHTML  = Number(sSlider.max).toLocaleString('ie-EN', { style: 'currency', currency: 'EUR' });
            var sPriceLabel = document.getElementById("sPriceLabel");
            sPriceLabel.value = sValue;

            var mortgageMultiplier = 4.0;
            if(useLHAL.checked){
                mortgageMultiplier = 4.25;
            }

            var maxMortgageLabel = document.getElementById("maxMortgageLabel");
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

            var fhsContainer = document.getElementById("fhsContainer");
            var fhsOutput = document.getElementById("fhsOutput");
            var yesDisplay = document.getElementById("yesDisplay");
            var noDisplay = document.getElementById("noDisplay");



            var fhs = 0;


            //var cahBool = document.getElementById("cahBool");
            //vLabel.value = "YES";
            if(useFHSCheckbox.checked)
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

            var bHPLabel = document.getElementById("bHPLabel");
            bHPLabel.innerHTML = hpValue.toLocaleString('ie-EN', { style: 'currency', currency: 'EUR' })
            var bBALabel = document.getElementById("bBALabel");
            bBALabel.innerHTML = mortgage.toLocaleString('ie-EN', { style: 'currency', currency: 'EUR' })
            var bDPLabel = document.getElementById("bDPLabel");
            bDPLabel.innerHTML = dpValue.toLocaleString('ie-EN', { style: 'currency', currency: 'EUR' })
            var bFHSLabel = document.getElementById("bFHSLabel");
            bFHSLabel.innerHTML = fhs.toLocaleString('ie-EN', { style: 'currency', currency: 'EUR' })
            var bHTBLabel = document.getElementById("bHTBLabel");
            bHTBLabel.innerHTML = yearTotalValue.toLocaleString('ie-EN', { style: 'currency', currency: 'EUR' })

            //vLabel.value = outputValue;
            return 0;
    }

    recalculateData();