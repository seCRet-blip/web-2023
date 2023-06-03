
<script>

      let items = [
    {
      title: "About",
      paragraphs: ["Careers", "Corporate Social Responsibility"]
    },
    {
      title: "Shop",
      paragraphs: ["Games", "Hardware", "Merchandise", "Sales & deals", "Exclusives", "Online service"]
    },
    {
      title: "My store",
      paragraphs: ["Order details", "Shipping info", "Returns & exchanges", "FAQ"]
    },
    {
      title: "Support",
      paragraphs: ["Switch", "Accounts", "Other systems", "Repairs", "Nintendo product recycling"]
    },
    {
      title: "Parents",
      paragraphs: ["Info for parents", "Parental controls"]
    },
    {
      title: "Privacy",
      paragraphs: ["Privacy policy"]
    },
    {
      title: "Community",
      paragraphs: ["Community guidelines", "Online safety principles"]
    }
  ];
</script>
<footer>
    <div class="grid-container">
      {#each items as item}
        <div class="grid-item">
          <div class="grid-content">
            <h3>{item.title}</h3>
            {#each item.paragraphs as paragraph}
              <p>{paragraph}</p>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </footer>

  
<style>


    .grid-content {
      text-align: left;
      margin-right: 25%;
    }
  
    footer {
      
      padding: 20px;
    }
  
    .grid-container {
      display: grid;
      grid-template-columns: repeat(7, 1fr) ; /* Updated grid-template-columns */
      grid-template-rows: repeat(1, 1fr);
      gap: 10px;
    }
  
    .grid-item {

      padding: 10px;
      height: 250px;
      width: 100%;
      text-align: center;
      border-left: 1px solid #333;
    }
  
    .grid-item:first-child {
      border-left: none;
    }
  
    .content-container {
      margin-top: 50px;
    }
  
  </style>

