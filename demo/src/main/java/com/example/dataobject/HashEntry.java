package com.example.dataobject;

public class HashEntry {
		int usn;
		String name;
		String branch;
	
	    public int getUsn() {
			return usn;
		}

		public void setUsn(int usn) {
			this.usn = usn;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public String getBranch() {
			return branch;
		}

		public void setBranch(String branch) {
			this.branch = branch;
		}

		public HashEntry(int usn, String name, String branch) 
	    {
	        this.branch = branch;
	        this.usn = usn;
	        this.name = name;
	    }
}
