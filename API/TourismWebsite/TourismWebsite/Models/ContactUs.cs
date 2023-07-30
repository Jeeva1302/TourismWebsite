using System;
using System.Collections.Generic;

namespace TourismWebsite.Models;

public partial class ContactUs
{
    public int ContactUsId { get; set; }

    public string? Message { get; set; }

    public string? Name { get; set; }

    public string? EmailId { get; set; }
}
