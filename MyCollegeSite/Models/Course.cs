using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace MyCollegeSite.Models
{
	public class Course
	{
		[Key]
		public int ID
		{ get; set; }
		public string Qualification
		{ get; set; }

		public string Years_of_Study
		{ get; set; }

		public string Placement_Opporunity
		{ get; set; }

		public string Level { get; set; }

		public string Course_Title { get; set; }
		public string Duration
		{
			get; set;
		}
	}
}
