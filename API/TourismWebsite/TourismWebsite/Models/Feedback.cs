using System;
using System.Collections.Generic;

namespace TourismWebsite.Models;

public partial class Feedback
{
    public int FeedbackId { get; set; }

    public int? BookingId { get; set; }

    public int? TourExperience { get; set; }

    public int? FoodandDining { get; set; }

    public int? Activities { get; set; }

    public string? Feedback1 { get; set; }

    public virtual Booking? Booking { get; set; }
}
