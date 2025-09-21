# 🏠 Room Management System - Prince Alex Airbnb

## 📋 Overview

The Room Management system allows you to add, edit, and manage room details through the admin dashboard. All changes are automatically reflected across your website pages.

## 🔑 Access

### Admin Dashboard Access
1. **Login Required:** Any registered Firebase user can access
2. **URL:** `/admin.html`
3. **Navigation:** User Menu → "⚙️ Admin Dashboard"

## 🏠 Room Management Features

### 📊 Room Overview Table
**Columns Displayed:**
- **Room ID** - Unique identifier
- **Room Name** - Display name (e.g., "Deluxe Suite")
- **Type** - Room category (Suite, Double, Single, Family, Budget)
- **Price/Night** - Rate in KES
- **Max Guests** - Maximum occupancy
- **Rating** - Star rating with review count
- **Status** - Availability status
- **Actions** - View, Edit, Delete buttons

### ➕ Add New Room

**Access:** Room Management → "➕ Add New Room"

**Required Fields:**
- **Room Name** - Unique name for the room
- **Room Type** - Select from dropdown (Suite, Double, Single, Family, Budget)
- **Price per Night** - Amount in KES (minimum 1000)
- **Max Guests** - Number of guests (1-5+)
- **Main Image URL** - High-quality image URL

**Optional Fields:**
- **Rating** - Star rating (4.0-5.0)
- **Number of Reviews** - Review count
- **Room Features** - One per line with emoji
- **Room Description** - Detailed description
- **Room Status** - Available, Maintenance, Occupied, Inactive
- **Display Priority** - High, Medium, Normal, Low

**Example Room Features:**
```
🛏️ King Bed
❄️ Air Conditioning
📶 Free WiFi
🛁 Private Bathroom
💼 Work Desk
🌿 Garden View
```

### ✏️ Edit Existing Room

**Access:** Room Management → Click "✏️" button on any room

**Features:**
- **Pre-filled Form** - All current data loaded
- **Same Fields** - All add room fields available
- **Live Updates** - Changes reflect immediately on website
- **Version Control** - Tracks update timestamps

### 🗑️ Delete Room

**Access:** Room Management → Click "🗑️" button on any room

**Safety Features:**
- **Confirmation Dialog** - Prevents accidental deletion
- **Permanent Action** - Cannot be undone
- **Database Cleanup** - Removes from Firebase completely

### 👁️ View Room Details

**Access:** Room Management → Click "👁️" button on any room

**Features:**
- **Opens Property Page** - Shows room as guests see it
- **New Tab** - Doesn't disrupt admin workflow
- **Live Preview** - See exactly how room appears to customers

## 🔄 Data Flow

### Firebase Integration
```
Admin Dashboard → Firebase 'rooms' Collection → Website Pages
```

**Collections Used:**
- **`rooms`** - Master room data
- **`bookings`** - Links to rooms via `roomId`
- **`customers`** - User accounts and preferences

### Website Integration
**Pages That Use Room Data:**
- **`index.html`** - Shows top 3 rooms (by priority)
- **`listings.html`** - Shows all available rooms
- **`property.html`** - Shows individual room details
- **`booking.html`** - Uses room data for booking

### Auto-Sync Features
✅ **Real-time Updates** - Changes appear immediately
✅ **Priority Sorting** - Rooms display by priority setting
✅ **Status Filtering** - Only available rooms show to guests
✅ **Fallback Data** - Default rooms if Firebase unavailable

## 🎯 Room Status Management

### Status Options
- **Available** - Bookable by guests ✅
- **Maintenance** - Temporarily unavailable 🔧
- **Occupied** - Currently booked 🏠
- **Inactive** - Hidden from website ❌

### Priority System
- **High (1)** - Shows first on website
- **Medium (2)** - Shows second
- **Normal (3)** - Standard display order
- **Low (4)** - Shows last

## 📊 Search & Export

### Search Functionality
**Search by:**
- Room name
- Room type
- Description text

### Export Features
**CSV Export includes:**
- Room ID, Name, Type
- Price, Max Guests
- Rating, Reviews
- Status, Priority
- Full Description

## 🛠️ Troubleshooting

### If Rooms Don't Load
1. **Check Firebase Connection**
   - Go to System tab
   - Click "Test Connection"

2. **Initialize Default Rooms**
   - Go to System tab
   - Click "Create Test Data"
   - Default rooms will be created

3. **Check Browser Console**
   - Press F12
   - Look for error messages
   - Check network connectivity

### Common Issues

**"Loading..." Stuck:**
- Firebase permissions issue
- Network connectivity problem
- Collection doesn't exist yet

**Solution:** Use "Create Test Data" to initialize

**Room Changes Not Showing:**
- Clear browser cache
- Check room status (must be "Available")
- Verify priority settings

## 🔧 Technical Details

### Database Structure
```javascript
rooms: {
  [roomId]: {
    id: number,
    name: string,
    type: string,
    price: number,
    maxGuests: number,
    rating: number,
    reviews: number,
    image: string,
    features: array,
    description: string,
    status: string,
    priority: number,
    createdAt: timestamp,
    updatedAt: timestamp
  }
}
```

### Integration Points
- **Homepage:** Loads top 3 rooms by priority
- **Listings:** Loads all available rooms
- **Property:** Loads specific room by ID
- **Booking:** Uses room data for pricing
- **Admin:** Full CRUD operations

## 🚀 Best Practices

### Room Images
- **Use high-quality URLs** from Unsplash or similar
- **Consistent aspect ratio** (16:9 recommended)
- **Fast loading** - optimized file sizes

### Room Descriptions
- **Be descriptive** but concise
- **Highlight unique features**
- **Include amenities** clearly
- **Use engaging language**

### Pricing Strategy
- **Competitive rates** for Uthiru area
- **Clear pricing** (per night in KES)
- **Consider seasonal adjustments**
- **Factor in amenities** for premium rooms

## 📈 Analytics Integration

The room management system integrates with analytics to show:
- **Popular Rooms** - Most booked rooms
- **Revenue by Room** - Performance metrics
- **Occupancy Rates** - Room utilization
- **Guest Preferences** - Booking patterns

---

**🎯 The room management system is now fully functional and integrated with your entire Prince Alex Airbnb website!**
