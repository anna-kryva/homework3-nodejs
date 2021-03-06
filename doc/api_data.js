define({ "api": [
  {
    "type": "post",
    "url": "/api/auth/forgot_password",
    "title": "Forgot password (send email) endpoint.",
    "name": "ForgotPasswordEmail",
    "group": "Auth",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>Payload content type.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Content-type header example:",
          "content": "{ \"Content-type\": \"application/json\" }",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Payload example:",
          "content": "{ \"email\": \"example@gmail.com\" }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Operation status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response example:",
          "content": "{ \"status\": \"The link to reset password has been sent.\" }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/auth.routes.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/auth/reset_password/",
    "title": "Forgot password (reset) endpoint.",
    "name": "ForgotPasswordReset",
    "group": "Auth",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>Payload content type.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Content-type header example:",
          "content": "{ \"Content-type\": \"application/json\" }",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repeat_password",
            "description": "<p>Repeat password.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Payload example:",
          "content": "{\n  \"password\": \"123456\",\n  \"repeat_password\": \"123456\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Operation status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response example:",
          "content": "{ \"status\": \"Password successfully changed.\" }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/auth.routes.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/api/auth/reset_password/:userId/:token",
    "title": "Forgot password (verification) endpoint.",
    "name": "ForgotPasswordVerification",
    "group": "Auth",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "payload",
            "description": "<p>Operation response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response example:",
          "content": "{\n  \"id\": \"fbawfibaw\",\n  \"token\": \"fnawilfmnaiwngainegnwegneiwngoiwe\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/auth.routes.js",
    "groupTitle": "Auth"
  },
  {
    "type": "delete",
    "url": "/api/loads/:id",
    "title": "Update load information.",
    "name": "DeleteLoad",
    "group": "Load",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Content-type header example:",
          "content": "{ \"Authorization\": \"JWT fnawilfmnaiwngainegnwegneiwngoiwe\" }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Operation status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response example:",
          "content": "{\"status\": \"Load has been successfully deleted.\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/loads.routes.js",
    "groupTitle": "Load"
  },
  {
    "type": "get",
    "url": "/api/loads/:id",
    "title": "Shipment information.",
    "name": "GetLoad",
    "group": "Load",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Content-type header example:",
          "content": "{ \"Authorization\": \"JWT fnawilfmnaiwngainegnwegneiwngoiwe\" }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Operation status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response example:",
          "content": "      {\n         \"status\": \"Success\",\n        \"_id\": \"fbawfibaw\",\n         \"assigned_to\": \"noifawnfoian\",\n         \"created_by\": \"jfnaikfna\",\n         \"status\": \"ASSIGNED\",\n         \"state\": \"En route to Pick Up\",\n         \"logs\": [{\"message\": \"Load created\", \ntime: 12312, \"_id\": \"kjhfks\"}],\n        \"payload\": 100,\n         \"dimensions\": {length: 100, width: 100, height: 100}\n         \"...\": \"...\"\n       }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/loads.routes.js",
    "groupTitle": "Load"
  },
  {
    "type": "get",
    "url": "/api/loads/:id/info",
    "title": "Update load information.",
    "name": "PutLoad",
    "group": "Load",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>Payload content type.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Content-type header example:",
          "content": "{ \"Authorization\": \"JWT fnawilfmnaiwngainegnwegneiwngoiwe\" }",
          "type": "json"
        },
        {
          "title": "Content-type header example:",
          "content": "{ \"Content-type\": \"application/json\" }",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "dimensions",
            "description": "<p>Dimensions of load.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "payload",
            "description": "<p>Payload of load.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pickupAddress",
            "description": "<p>Pickup address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deliveryAddress",
            "description": "<p>Delivery address.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Payload example:",
          "content": "{\n \"dimensions\":{length: 100, width: 100, height: 100},\n \"payload\": 100\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Operation status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response example:",
          "content": "{\"status\": \"Load information updated successfully.\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/loads.routes.js",
    "groupTitle": "Load"
  },
  {
    "type": "delete",
    "url": "/api/photo",
    "title": "Delete photo from AWS and remove link.",
    "name": "DeletePhoto",
    "group": "Photo",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Content-type header example:",
          "content": "{ \"Authorization\": \"JWT fnawilfmnaiwngainegnwegneiwngoiwe\" }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Operation status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response example:",
          "content": "{\"status\": \"Profile photo deleted successfully\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/photo.routes.js",
    "groupTitle": "Photo"
  },
  {
    "type": "get",
    "url": "/api/photo",
    "title": "Get photo link at AWS.",
    "name": "GetPhoto",
    "group": "Photo",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Content-type header example:",
          "content": "{ \"Authorization\": \"JWT fnawilfmnaiwngainegnwegneiwngoiwe\" }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photoLink",
            "description": "<p>Photo link at AWS.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response example:",
          "content": "{\"photoLink\": \"https://s3-us-west-2.amazonaws.com/...\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/photo.routes.js",
    "groupTitle": "Photo"
  },
  {
    "type": "put",
    "url": "/api/photo",
    "title": "Upload photo at AWS.",
    "name": "PutPhoto",
    "group": "Photo",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>Payload content type.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Content-type header example:",
          "content": "{ \"Authorization\": \"JWT fnawilfmnaiwngainegnwegneiwngoiwe\" }",
          "type": "json"
        },
        {
          "title": "Content-type header example:",
          "content": "{ \"Content-type\": \"multipart/form-data\" }",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>Image file.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Operation status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response example:",
          "content": "{\"status\": \"Profile photo uploaded successfully\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/photo.routes.js",
    "groupTitle": "Photo"
  },
  {
    "type": "delete",
    "url": "/api/profileDelete",
    "title": "user.",
    "name": "DeleteProfile",
    "group": "Profile",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Content-type header example:",
          "content": "{ \"Authorization\": \"JWT fnawilfmnaiwngainegnwegneiwngoiwe\" }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Operation status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response example:",
          "content": "{ \"status\": \"User account deleted successfully\" }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/profiles.routes.js",
    "groupTitle": "Profile"
  },
  {
    "type": "get",
    "url": "/api/profile",
    "title": "Profile information.",
    "name": "GetProfile",
    "group": "Profile",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Content-type header example:",
          "content": "{ \"Authorization\": \"JWT fnawilfmnaiwngainegnwegneiwngoiwe\" }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Operation status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response example:",
          "content": "{\n  \"status\": \"Success\",\n  \"user\": \n   {\n    \"email\": \"anna@gmail.com\",\n    \"photoLink\": \"https://s3-us-west-2.amazonaws.com/...\",\n    \"firstName\": \"Anna\",\n    \"lastName\": \"Kryva\",\n    \"role\": \"shipper\",\n    }\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/profiles.routes.js",
    "groupTitle": "Profile"
  },
  {
    "type": "patch",
    "url": "/api/profile/email",
    "title": "Update profile email.",
    "name": "UpdateEmailProfile",
    "group": "Profile",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>Payload content type.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Content-type header example:",
          "content": "{ \"Authorization\": \"JWT fnawilfmnaiwngainegnwegneiwngoiwe\" }",
          "type": "json"
        },
        {
          "title": "Content-type header example:",
          "content": "{ \"Content-type\": \"application/json\" }",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Payload example:",
          "content": "{ \"email\": \"anna@gmail.com\" }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Operation status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response example:",
          "content": "{ \"status\": \"Email updated successfully\" }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/profiles.routes.js",
    "groupTitle": "Profile"
  },
  {
    "type": "patch",
    "url": "/api/profile/name",
    "title": "Update user's name.",
    "name": "UpdateNameProfile",
    "group": "Profile",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>Payload content type.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Content-type header example:",
          "content": "{ \"Authorization\": \"JWT fnawilfmnaiwngainegnwegneiwngoiwe\" }",
          "type": "json"
        },
        {
          "title": "Content-type header example:",
          "content": "{ \"Content-type\": \"application/json\" }",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>User's first name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>User's last name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Payload example:",
          "content": "{ \n    \"firstName\": \"Anna\", \n    \"lastName\": \"Kryva\",\n  }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Operation status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response example:",
          "content": "{ \"status\": \"Name updated successfully\" }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/profiles.routes.js",
    "groupTitle": "Profile"
  },
  {
    "type": "patch",
    "url": "/api/profile/reset_password",
    "title": "Update user's password.",
    "name": "resetPasswordProfile",
    "group": "Profile",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>Payload content type.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Content-type header example:",
          "content": "{ \"Authorization\": \"JWT fnawilfmnaiwngainegnwegneiwngoiwe\" }",
          "type": "json"
        },
        {
          "title": "Content-type header example:",
          "content": "{ \"Content-type\": \"application/json\" }",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>New password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repeat_password",
            "description": "<p>Repeat new password.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Payload example:",
          "content": "{ \n    \"password\": \"qwerty123\", \n    \"repeat_password\": \"qwerty123\",\n  }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Operation status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response example:",
          "content": "{ \"status\": \"Password changed successfully\" }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/profiles.routes.js",
    "groupTitle": "Profile"
  },
  {
    "type": "patch",
    "url": "/api/trucks/:id",
    "title": "Delete truck (only when it it in service).",
    "name": "DeleteTruck",
    "group": "Truck",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Content-type header example:",
          "content": "{ \"Authorization\": \"JWT fnawilfmnaiwngainegnwegneiwngoiwe\" }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Operation status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response example:",
          "content": "{\"status\": \"Truck deleted successfully\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/trucks.routes.js",
    "groupTitle": "Truck"
  },
  {
    "type": "patch",
    "url": "/api/trucks/:id/unassign",
    "title": "Unassign truck (only when it it in service).",
    "name": "UnassignTruck",
    "group": "Truck",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Content-type header example:",
          "content": "{ \"Authorization\": \"JWT fnawilfmnaiwngainegnwegneiwngoiwe\" }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Operation status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response example:",
          "content": "{\"status\": \"Truck unassigned successfully\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/trucks.routes.js",
    "groupTitle": "Truck"
  },
  {
    "type": "patch",
    "url": "/api/trucks/:id/update",
    "title": "Update truck information (name) (only when it it in service).",
    "name": "UpdateTruckName",
    "group": "Truck",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>Payload content type.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Content-type header example:",
          "content": "{ \"Authorization\": \"JWT fnawilfmnaiwngainegnwegneiwngoiwe\" }",
          "type": "json"
        },
        {
          "title": "Content-type header example:",
          "content": "{ \"Content-type\": \"application/json\" }",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Truck's name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Payload example:",
          "content": "{\n \"name\": \"Truck\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Operation status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response example:",
          "content": "{\"status\": \"Truck updated successfully\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/trucks.routes.js",
    "groupTitle": "Truck"
  }
] });
