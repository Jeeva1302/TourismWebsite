using System;
using System.Collections.Generic;

namespace TourismWebsite.Models;

public partial class Hotel
{
    public int HotelId { get; set; }

    public string? HotelName { get; set; }

    public int? PackageId { get; set; }

    public virtual Package? Package { get; set; }
}
