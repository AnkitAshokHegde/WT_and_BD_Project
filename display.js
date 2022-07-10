    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
   
    // Logic
    let tax,returns = 0;
    let s_g,sug = "No suggestions";  

    let GAI = parseInt(params.Salary);
    let AI = parseInt(params.Income);    
    let Profit = parseInt(params.profit);
    let loss = parseInt(params.loss);
    let app_16D = params.question1;
    let loss_claim = params.question2;
    let gen = params.question3;

    console.log(loss_claim);

    if(gen=="male"||gen=="female")
    {
        if(loss_claim=="yes")
        {
            
            if((GAI+AI)<300000)
            {
                tax = 0;
            }
            else if(((GAI+AI)>=300000) && ((GAI+AI)<=500000))
            {
                tax = (GAI+AI-300000-0.05*loss)*0.05;
            }
            else if(((GAI+AI)>=500000) && ((GAI+AI)<=1000000))
            {
                tax = (GAI+AI-300000-0.05*loss)*0.2;
            }
            else
            {
                tax = (GAI+AI-300000-0.05*loss)*0.3;
            }
        }
        else
        {
            
            if((GAI+AI)<300000)
            {
                tax = 0;
            }
            else if(((GAI+AI)>=300000) && ((GAI+AI)<=500000))
            {
                tax = (GAI+AI-300000)*0.05;
            }
            else if(((GAI+AI)>=500000) && ((GAI+AI)<=1000000))
            {
                tax = (GAI+AI-300000)*0.2;
            }
            else
            {
                tax = (GAI+AI-300000)*0.3;
            }
        }
    }    
    else 
    {
        
        if(loss_claim=="yes")
        {
            
            if((GAI+AI)<500000)
            {
                tax = 0;
            }
            else if(((GAI+AI)>=500000) && ((GAI+AI)<=1000000))
            {
                tax = (GAI+AI-300000-0.05*loss)*0.05;
            }
            else
            {
                tax = (GAI+AI-500000-0.05*loss)*0.3;
            }
        }
        else
        {
            
            if((GAI+AI)<300000)
            {
                tax = 0;
            }
            else if(((GAI+AI)>=300000) && ((GAI+AI)<=500000))
            {
                tax = (GAI+AI-300000)*0.05;
            }
            else if(((GAI+AI)>=500000) && ((GAI+AI)<=1000000))
            {
                tax = (GAI+AI-300000)*0.2;
            }
            else
            {
                tax = (GAI+AI-300000)*0.3;
            }
        }
    }

    returns = GAI+AI-tax;

    if((GAI >= 300000) && (GAI <= 500000 ) )
    {
        sug = "When HRA is not a part of the salary, the tax benefit can be availed in the following ways: 1) subtracting rent from 10% of income, 2) a flat rate of Rs. 5000 on a monthly basis, 3) 1/4th of total income. These deductions are a part of Section 80GG. 4) 5-Year Bank Fixed Deposit, National Savings Certificate, National Pension System (NPS)";
    }
    else if((GAI >= 500000) && (GAI <= 1000000 ) )
    {
        sug = "Employees can make use of this feature to cover travel tickets of spouse, children, and parents. Siblings are covered only if they are dependent on the salaried person. This falls under section 10(5).  You can consider 5-Year Bank Fixed Deposit, National Savings Certificate, National Pension System (NPS) also";
    }
    else
    {
        sug = "Investments are financial instruments where you invest today and reap benefits later. Besides this, investments also help you to save on taxes. Some of the common investment options are- Mutual funds, Tax Saving Fixed Deposit, Post Office Time Deposit. You can consider investing in 5-Year Bank Fixed Deposit,  National Savings Certificate, National Pension System (NPS) also";
    }

    s_g = " Suggession : "+sug;

    document.getElementById("suggestion-2").innerHTML=s_g;
    document.getElementById("suggestion-1").innerHTML="Hi "+params.name+", here's your tax results";
    document.getElementById("suggestion-table1").innerHTML=""+(GAI+AI)+" Rs.(INR)";
    document.getElementById("suggestion-table2").innerHTML=""+(tax)+" Rs.(INR)";
    document.getElementById("suggestion-table3").innerHTML=""+(returns)+" Rs.(INR)";

    document.getElementById("return-1").onclick=()=>{
        location.href="/";
    };
    